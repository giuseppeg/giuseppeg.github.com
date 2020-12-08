---
layout: post
title: Abstractions
date: 2019/03/24
disqus: true
tweet_id: 1109750709753393152
---

At some point, a few years go, <abbr title="Don't repeat yourself">DRY</abbr> became a hot topic in frontend development and everybody started to advocate for it.

Bringing order into a caotic and messy world like CSS' by making good use of the cascade and by introducing methodologies and styleguides was a huge step forward.

Nowadays we have popular or in-house ~~styleguides~~ design systems and terminology that allow us to formalize otherwise _boundaryless_ parts of an interface and define a common set of rules and a vocabulary to _universally_ describe them.

Designers and developers constantly chase the right abstraction whether that be reusable components or APIs.

The reality though is that making abstractions is really hard and requires incredible analytical skills, extensive research (often months or years) and being able to predict the future 🧙‍♂️

Most of the times, in fact, we end up just making our lives harder and simply scheduling a shoot in our foot with a random timeout.

Quoting the wise [Michele Bertoli](https://twitter.com/MicheleBertoli)

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet" data-link-color="#008000"><p lang="en" dir="ltr">Your abstraction looks beautiful until the requirements change.<br>And yes, they are going to change.<br><br>Some metrics you can track:<br>- time *to* workaround (e.g. additionalProps)<br>- time *with* workaround (before the abstraction gets refactored)<br><br>Does it worth the effort?</p>&mdash; Michele Bertoli (@MicheleBertoli) <a href="https://twitter.com/MicheleBertoli/status/1073142067411517440?ref_src=twsrc%5Etfw">December 13, 2018</a></blockquote> <!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</div>

_Abstraction phobia_ is real. I have it too yet I am often tempted to come up with smart-ass abstractions.

Before even making an abstraction however I try to follow a few steps:

- Make something that solves my current use case
- Try not to do too much in one place
- When requirements change "fork" i.e. duplicate and tweak
- Wait a few months for new use cases or requirements

<blockquote> After you've got a few places where that code is running, the commonalities will scream at you for abstraction and you'll be in the right frame of mind to provide that abstraction. – <a href="https://kentcdodds.com/blog/moist-programming" target="_blank">Kent C. Dodds</a></blockquote>

- Abstract
- Refactor gradually or with a tool

What is your secret sauce? I would love to hear about that in the comments or on [Twitter](https://twitter.com/giuseppegurgone).

--

I highly recommend you to read [Optimize for Change](https://overreacted.io/optimized-for-change/) by [Dan Abramov](https://twitter.com/dan_abramov).
