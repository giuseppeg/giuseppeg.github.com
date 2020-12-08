---
layout: post
title: Margins and Composability in CSS
date: 2016/04/05
disqus: true
tweet_id: 717440992870285312
---

If you work with CSS you may be familiar with the Lego analogy by Nicole Sullivan.

<div class="Copy-embedTweet">
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Treat code like Lego. Break code into the smallest little blocks possible.&quot; — <a href="https://twitter.com/csswizardry">@csswizardry</a> (via <a href="https://twitter.com/stubbornella">@stubbornella</a>) <a href="https://twitter.com/hashtag/btconf?src=hash">#btconf</a></p>&mdash; Smashing Magazine (@smashingmag) <a href="https://twitter.com/smashingmag/status/339024926197559296">May 27, 2013</a></blockquote>
  <!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</div>

Follow this advice and, with time, you will end up with a collection of _reusable_ components that you can _compose_ to build complex UIs.

This concept is so simple that even my dad got it.

_Reusability_ and _composabilty_ are the key to success.

There are many articles and talks around the reusability topic, but I have [rarely](https://github.com/suitcss/suit/blob/master/doc/components.md#adapting-to-ancestral-context) read about composability in CSS so I figured I'd write something about it.

## Composability

<blockquote><p>Composability is a system design principle that deals with the inter-relationships of components.</p> <p>A highly composable system provides recombinant components that can be selected and assembled in various combinations to satisfy specific user requirements.</p><footer>Wikipedia, <cite><a href="https://en.wikipedia.org/wiki/Composability#System_Design">Composability</a></cite></footer></blockquote>

Composability is about making the pieces play nicely together.

CSS Rules that affect _composability_ compare to Lego studs: they let us <cite>assemble components in various combinations to satisfy specific user requirements</cite>.

Unlike Lego bricks though, UI components are not just glued together with studs.
They are laid out and **spaced** in different ways to adapt to the context of the current view.

In this game margins play a big role.

## Margins

Composability in CSS is ruled by <code>margin</code> among other things.

Margins are often global and set to arbitrary standard values at the beginning of a project.

Take this code for example:

{% highlight css %}
/\*_ typography.css _/
h1 { margin: 3em 0; }
p { margin-bottom: 1em; }

/\*_ components/form.css _/
.form { margin-bottom: 3em; }
.form\_\_input { margin-bottom: 1em; }
{% endhighlight %}

Here we have some global typography and default <code>margin-bottom</code> for the <code>form</code> component. A similar setup can be found in many popular or in-house CSS frameworks.

The code is well organized in separate files and it is _reusable_, but depending on the use-case it could be hard to _compose_ the components without having to reset a couple of rules.

There are some things to keep in mind when building UI components or a pattern library:

- Context and default margins
- Margin direction

## Context and default margins

When defining base styles or building a new component it is hard to know in advance where UI components are going to be used.

The effect of globals is **unpredictable** &mdash; this is a gotcha in JavaScript world, yet many CSS developers don't want to accept the fact that this is true for styles too.

In the context of a header for example a default <code>margin-bottom</code> <span aria-hidden="true">(the red area in the example below)</span> on the form may have undesired effects and has to be reset.

<div class="Copy-embedTestcase" aria-hidden="true">
  <p data-height="180" data-theme-id="17902" data-slug-hash="mPBoJm" data-default-tab="result" data-user="giuseppegurgone" class="codepen">See the Pen <a href="http://codepen.io/giuseppegurgone/pen/mPBoJm/">mPBoJm</a> by Giuseppe Gurgone (<a href="http://codepen.io/giuseppegurgone">@giuseppegurgone</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//s.codepen.io/assets/embed/ei.js"></script>
</div>

I have seen and had to reset similar rules many times &mdash; _design_ choices were made years ago by someone who didn't or couldn't predict my case of use, and now I have to deal with it :)

UI components instead should be self-contained. The component root should be free of any rule that may affect composability, specifically:

- margins
- layout rules like position (absolute or fixed), float, transform, etc
- width

We can then use higher-order components or utilities to fit the component into a specific context.

## Margin direction

The margin direction of child elements can also affect composability.

In 2012 Harry Roberts wrote about [Single-direction margin declarations](http://csswizardry.com/2012/06/single-direction-margin-declarations/).

<blockquote>The basic premise is that you should try and define all your margins in one direction.</blockquote>

By choosing a single direction the effect of margins is more predictable and there are fewer side effects.

However child elements can still affect the surrounding components:

take an unordered list whose items have a `margin-bottom`, any adjacent component/element or parent container will be affected by the `margin-bottom` of the last item.

<div class="Copy-embedTestcase" aria-hidden="true">
  <p data-height="268" data-theme-id="17902" data-slug-hash="BKwbqq" data-default-tab="result" data-user="giuseppegurgone" class="codepen">See the Pen <a href="http://codepen.io/giuseppegurgone/pen/BKwbqq/">BKwbqq</a> by Giuseppe Gurgone (<a href="http://codepen.io/giuseppegurgone">@giuseppegurgone</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

My suggestion is to always reset peripheral margins and to not set margins on the component root at all.

{% highlight css %}
.list { margin: 0; }
.list__item { margin-bottom: 2em; }
.list__item:last-child { margin-bottom: 0; }
{% endhighlight %}

An improvement is to always use <code>margin-top</code> and <code>margin-left</code> and reset the <code>:first-child</code> instead.

This is no different from resetting the `:last-child` except for the fact that the `:first-child` pseudo-class is supported by legacy browsers as well.

Finally we can avoid to reset rules by using the adjacent sibling selector `+`.

{% highlight css %}
.list__item + .list__item { margin-top: 2em; }
{% endhighlight %}

<div class="Copy-embedTestcase" aria-hidden="true">
  <p data-height="268" data-theme-id="17902" data-slug-hash="zqPdgR" data-default-tab="result" data-user="giuseppegurgone" class="codepen">See the Pen <a href="http://codepen.io/giuseppegurgone/pen/zqPdgR/">zqPdgR</a> by Giuseppe Gurgone (<a href="http://codepen.io/giuseppegurgone">@giuseppegurgone</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>
