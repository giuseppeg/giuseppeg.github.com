---
layout: post
title: Use the CDN
date: 2019/11/27
preview_image: https://user-images.githubusercontent.com/711311/69711595-9e7f3e00-1101-11ea-92d5-bfb799b9ca8b.png
private: true
---

What do jQuery and ReactDOM have in common? Hint it starts with _30_ and ends with _kB_.

<figure aria-hidden="true">
<img src="https://user-images.githubusercontent.com/711311/69671065-98537800-1095-11ea-93c8-c04c0c8e9d7a.png" alt>
</figure>

## Not a React blog post

This blog post is not about React vs. jQuery but rather about our bundles size and Content Delivery Networks.

The other day I was visiting an older site – one of the many out there – built with a classic SSR + jQuery stack. Loading felt a bit slow so I couldn't resist to open up the dev tools' Network tab and take a look.

<figure aria-hidden="true">
<img src="https://user-images.githubusercontent.com/711311/69671067-98ec0e80-1095-11ea-8121-a2072385a028.png" alt>
</figure>

Without much surprise the site included a massive amount of scripts, 101!

At that point I went and took a look at the React SPA I work on at the moment.

<figure aria-hidden="true">
<img src="https://user-images.githubusercontent.com/711311/69671068-98ec0e80-1095-11ea-84d3-2c3a1e723d30.png" alt>
</figure>

It turns out that it is actually smaller than the PHP+jQuery site.

You will notice that there is a big elephant in the room - that main 360kB bundle. Partially this is due to an issue with CSS which is blocking us from code splitting the application, but I am working on it and it will get better soon! See [https://git.io/JeXkw](https://git.io/JeXkw).

Anyway I brought up this example to demonstrate that today, like in the past, there are sites or applications that invest or not in performance tuning and reducing bundle size regardless of their stack.

In many cases I'd argue that today we spend more time into optimizing bundle size than ever. Many might claim that bundle size wasn't a problem in the past. Wasn't it though? Surely we were using bundlers less.

## The days of public CDN

Back to my application, third parties libraries account for a good portion of those 360kB.

What puzzles me is that nowadays, the future, third parties libraries end up in our application bundles. Sure you can bundle them away in a _vendor chunk_ but this is not the default and I cannot stop thinking about those 100+ requests the old site made and how common was that in the past.

Including 100+ scripts is definitely not a good thing but really I want to focus on the fact that most of them are served by public CDN.

Back in the days adding jQuery came with ~0kB cost! This was due to the fact that many websites would pull the framework from the same public CDN.

<figure aria-hidden="true">
<img src="https://user-images.githubusercontent.com/711311/69671067-98ec0e80-1095-11ea-8121-a2072385a028.png" alt>
</figure>

Over time this changed with CommonJS modules and bundlers and there are a million reasons why the latter are preferred or served us, developers (not users), better until now.

Bundling third parties though seems suboptimal to me and I hope that this will change quickly enough with ESModules and projects like [PikaCDN](https://www.pika.dev/cdn).

<blockquote>
  The Pika CDN leverages your browser's shared module cache for incredible performance. A package loaded on one site will be cached and reused for future visits to any CDN-powered site. This means fewer cold starts and faster load times as visitors arrive to your site with dependencies already loaded.
</blockquote>

We are reinventing the wheel and for once I am very excited about it!

## What you can do about it

Put mini advice/tutorial here.

Finally as I was writing my thoughts down I remembered of a talk from Luke Jackson called "Don't build that app!". I highly recommend you to watch it!

<iframe class="Video" src="https://www.youtube.com/embed/mVjZQrsXBQE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
