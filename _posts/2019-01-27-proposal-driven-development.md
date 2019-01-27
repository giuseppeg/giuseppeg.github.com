---
layout: post
title: Proposal Driven Development
date: 2019/01/27
tldr: "Transcript of a thread on Twitter about how writing proposals or RFCs can improve the quality of software."
disqus: true
tweet_id: 1085115448302231552
hn_id: 19012226
---

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet" data-link-color="#008000"><p lang="en" dir="ltr">We have been practicing Proposal (RFC) Driven Development at work and it is awesome 😎 Thread because I am too lazy to write a blog post:</p>&mdash; Giuseppe (@giuseppegurgone) <a href="https://twitter.com/giuseppegurgone/status/1085115448302231552?ref_src=twsrc%5Etfw">January 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

The idea is to write and discuss a proposal in a Google doc before starting development. Normally we do this for features or changes that somehow might affect existing app architecture or when implementing a new abstraction or API.

We also go through this process for bug fixes that might introduce architecture changes.

The goal is to force ourselves to think about architecture, problems and solutions ahead of time and save time when developing. Often we have everything figured out before starting to code and we only end up solving trivial / minor issues when implementing the proposal.

It is also great that we get to discuss things before even starting to code rather than in code review when it might be too late to ask for big changes when spotting architecture flaws.

During this process we also try to come up with estimations and then compare with the actual “time to merge” once something is done. Often estimations are wrong but it is a good exercise.

Last but not least a Google doc file is a great tool to discuss as non tech people can contribute if necessary.

---

My friend Angus brought up a good point then:

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet" data-link-color="#008000"><p lang="en" dir="ltr">And afterwards I’m thinking did we solve this just RFC or by prototyping and then sharing progress?</p>&mdash; angus 牛 (@angustweets) <a href="https://twitter.com/angustweets/status/1085212821841793024?ref_src=twsrc%5Etfw">January 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

I do quick and dirty prototyping too to validate assumptions. Normally I don't spend more than one day on this so it hardly morphs into the product (although it has happened).

To me the RFC is a way to formalize and get a code review before starting implementation. I think it is useful when working on a complex system as there might be more knowledgable folks that can provide valuable feedback or spot flaws / think about edge cases and so on.
