---
layout: post
title: Synchronizing Async Functions in Node.js
date: 2020/12/05
private: true
---

Recently I found myself researching for ways to run an async function in the main thread in a blocking and synchronous fashion.

The reason why I went on this journey is that a Babel plugin of mine needs to call an async function to perform some work but Babel doesn't really provide an asynchronous API and therefore node visitors must be synchronous.

## Shared Memory and Mutex to the Rescue

Thanks to a brilliant suggestion from [Nicolò Ribaudo](https://twitter.com/NicoloRibaudo), I settled on a solution that involves running the async function in a worker and blocking the main thread with a mutex on a [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) implemented with [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics).

## Details

At the core of this solution is a [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) that is an object that can be used to create views on shared memory.

Two threads, say main and worker, can share this object without having to transfer it back and forth.

When working on shared memory a thread can claim and lock the object to protect shared data from being simultaneously accessed by other threads. This is done via a synchronization primitive called mutex.

In JavaScript we can use [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) to implement mutexes.

Now if a worker thread locks a shared object, we can force the main thread to wait (sleep) until our asynchronus function has been settled and the lock is released.

In the main thread we can

- Create an Int32Array mapped onto a SharedArrayBuffer
- Create an instance of the worker
- Post a message to the worker with a reference to the Int32Array
- Wait (sleep) for the Int32Array to be unlocked by the worker
- Read the message (result) from the worker <u>synchronously</u>

In the worker

- Invoke our async function
- When the async function resolves, post a message to the main thread with the result
- Unlock the Int32Array

Once the main thread is unblocked, it can read the message containing the result sent by the worker synchronously with Node.js' [receiveMessageOnPort](https://nodejs.org/api/worker_threads.html#worker_threads_worker_receivemessageonport_port).

Here's what this looks like in code:

<!-- prettier-ignore-->
{% highlight javascript %}
// Main Thread
const {
    Worker,
    receiveMessageOnPort,
    MessageChannel,
} = require("worker_threads");
//
function main(...args) {
  const worker = new Worker("./worker.js");
  const signal = new Int32Array(new SharedArrayBuffer(4));
  signal[0] = 0;
  try {
    const subChannel = new MessageChannel();
    worker.postMessage({ signal, port: subChannel.port1, args }, [
        subChannel.port1,
    ]);
    // Sleep until the other thread sets signal[0] to 1
    Atomics.wait(signal, 0, 0);
    // Read the message (result) from the worker synchronously
    return receiveMessageOnPort(subChannel.port2).message.result;
  } finally {
    worker.unref();
  }
}
{% endhighlight %}

<!-- prettier-ignore-->
{% highlight javascript %}
// Worker Thread
const { parentPort } = require("worker_threads");
const asyncFunction = require("./asyncFunction");
//
parentPort.addListener("message", async ({ signal, port, args }) => {
  // This is the asynchronous function that we want to run "synchornously"
  const result = await asyncFunction(...args);
  // Post the result to the main thread before unlocking "signal"
  port.postMessage({ result });
  port.close();
  // Change the value of signal[0] to 1
  Atomics.store(signal, 0, 1);
  // This will unlock the main thread when we notify it
  Atomics.notify(signal, 0);
});
{% endhighlight %}

## Considerations

While blocking the main thread is usually a bad idea and something you might never need to do, I think that the approach I just showed you is very interesting.

This solution relies on two features that are unique to Node.js:

- `Atomics.wait` works in the main thread. In a browser environment this is not allowed and calling this method will result in a `TypeError`
- `receiveMessageOnPort` which is only available since Node.js v12.3.0

Keep in mind that the return value of the async function must be serializable/transferable because the worker has to transfer it to the main thread.

Finally in order to make the multi-thread solution blazing fast™️ I had to keep the worker around instead of reistantiating it on every invocation of my `main` synchronous function.

## Alternatives

An alternative solution I had been using for a while is to run the async function in a child process which is spawned synchronously with Node's `child_process.spawnSync` and then read the result from `stdout`.

However spawning a lot of processes is an order of magnitude slower than using threads (a worker).

## An OSS Success Story

This research started when the web team at the XXX Company (asking for permission to metion) hired me to perform an audit of their codebase with the goal of improving build time in development.

With their financial support I was able to investigate and research for a solution to improve the speed of my open source plugin by 5x💨

In return I decided to start sponsoring Nicolò Ribaudo not only as a way to thank him for taking the time to chat with me about this solution but also to support the outstanding work he has been doing on Babel.

Nicolò is an Italian fellow 🇮🇹 He is core member of the Babel team, TC39 invited expert and among many other things co-author of the [Records and Tuples ECMAScript proposal](https://github.com/tc39/proposal-record-tuple) which I am very excited about.

If you are reading this article there is a good chance that you benefit from his open source work too so, if you or your company has the means, please consider [sponsoring him on GitHub](https://github.com/sponsors/nicolo-ribaudo)!
