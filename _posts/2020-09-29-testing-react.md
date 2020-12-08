---
layout: post
title: "Testing React Applications"
date: 2020/09/29
preview_image: https://user-images.githubusercontent.com/711311/94572348-33e2e580-0271-11eb-8eea-c843b375b851.png
---

Recently a friend asked how to go about testing React applications:

> Who of you is unit testing your React applications and how do you approach this topic?

In this blog post I write about my (mostly) holistic approach to testing a typical web application.

## Type Checking

Types are a guard against run time errors and can spare me an entire class of unit tests whose sole scope would be to assert correctess of input/output.

In the case of React typing props and state can go a long way since the misuse of any data form these collections will be reported by the type checker before my code hits master or production.

## Unit Testing

Unit testing is good for things that require little to no mocking and can be tested in isolation i.e. the likelyhood of breaking when integrated is little or 0.

For example testing that an event handler is called might work in your unit test but break if in the application the event doesn't propagate.

Instead, I always aim to test the real thing e.g. I would unit test a function that computes something (eg. position of an element or a complex reducer).

<small>Note a React component in some cases can be also considered as a function that computes something.</small>

### Shallow Rendering

I don't do shallow rendering because components down the tree might affect the current one in a way that shallow rendering won't reflect.

### Snapshot Testing

Snapshot testing React trees? On paper it sounds great, even TDD-ish! You run a function (render) and assert that the return value (snapshot) is correct.

In practice JSX snapshots are often very noisy and there is a good chance that people will update them without paying too much attention to what changed.

DOM rendering and testing is preferred and effective enough.

## Integration

Depending on where in the tree is my component and what layer of my application it belongs to I do integration testing by putting together a relevant amount of units and asserting for correctness of behavior.

I tend to have more of these and fewer but crucial unit tests.

That said, sometimes testing against the entire application in a real browser can be more effective than any artificial isolated testcase.

### Mocking

I avoid mocking as much as possible, especially when it feels unnatural i.e. my function or component has side effects and I can't inject dependencies.

This is because with a mock you'd set up a synthetic environment which might be buggy and not always reflect the real, final one.

Normally this happens a lot when doing integration testing, but can also be the case in End-to-End testing e.g. to mock network / an API.

If you need to mock network try [MSW](https://mswjs.io/).

## End-to-End Testing

Ultimately what matters is the correctness of a system as a whole and that's why e2e testing is one of the most effective testing methodologies.

I prefer to optimize for real case scenarios as much as possible and love to spin up a browser and automate Human Acceptance Testing (HAT) with code to validate the correctness of a workflow end-to-end.

Althought this is my preferred way, it might not always be the right choice and of course comes with downsides:

- it hardly works cross browser
- cost might be higher - infrastructure and time to run tests
- it could lead to flakiness

### Reduce Chances of Flakiness

Most of the time flakiness is due to environment issues or timing issues. The following rules can help reducing timing issues:

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The two golden rules of e2e testing:<br><br>1. avoid setTimeout<br>2. wait for things i.e. retry until timeout</p>&mdash; Giuseppe (@giuseppegurgone) <a href="https://twitter.com/giuseppegurgone/status/1275751333426069505?ref_src=twsrc%5Etfw">June 24, 2020</a></blockquote> <!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</div>

### Reactive Testing

In some cases I would even go as far as doing _reactive_ testing instead of _defensive_ i.e. write few tests and add regression tests when finding and fixing bugs.

Visual regression testing through screenshots comparison is also cool.

## Conclusion

IMO the best way to go about testing an application is to cover mission critical and weak spots with a mix of integration and End-to-End tests.

I don't obsess over test coverage and testing all the things and I would define my approach as holistic.
