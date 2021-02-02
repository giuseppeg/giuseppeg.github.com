---
layout: post
title: Let me try to explain CSS in JS to you
date: 2018/12/08
disqus: true
tweet_id: 1071499929028308994
---

Hi friend,

Let me try to explain CSS in JS to you. It works kinda like this:

<figure class="highlight">
<pre><code>// CSS

.rule {
  property: value
}

// in JS:

const rule = {
  property: value
}</code></pre>
</figure>

Add 2 simple rules:

1. property names are camelCase: dashes in property names are removed and the letter following the dash is upper case:

<figure class="highlight">
<pre><code>// CSS

margin-top

// in JS:

marginTop</code></pre>
</figure>

2. values are quoted:

<figure class="highlight">
<pre><code>// CSS

display: block

// in JS:

display: 'block'</code></pre>
</figure>

Rules are converted to regular CSS rules and inserted in a style tag:

{% highlight javascript %}
// Let's build .rule { display: block; }

const rule = { display: 'block' }

// ↓↓↓↓

let css = '.rule {'
for (let property in rule) {
  css += property + ': ' + rule[property] + ';'
}
css += '}'

// ↓↓↓↓

const style = document.body.appendChild(
  document.createElement('style')
)
style.sheet.insertRule(css)
{% endhighlight %}

usually this is done with a utility function that creates a scoped selector for `.rule` eg. `.rule-AbY3c` so that there aren't collisions with similar selectors.

The function then returns this scoped class name eg. `rule-AbY3c` so that you can set it on an HTML element:

{% highlight javascript %}
const rule = { display: 'block' }
const className = css(rule)

const someHtml = `
  <span class="${className}">hello</span>
`
// ↓↓↓↓
// <span class="rule-AbY3c">hello</span>
{% endhighlight %}

These "magic" `css` functions usually do a lot of things for you like automatically adding vendor prefixes or accepting a list of reusable rules and merging them into a new one!

## Why THO?

Using a tool like CSS in JS brings in some benefits:

- You can style individual elements without affecting other elements
- You can compose `rule`s to avoid repetition and apply the resulting class name to an element
- You can use built-in primitives like loops, variables, and do math without having to introduce a new tool like a preprocessor
- Styles are colocated with your markup or even authored inline and then compiled away. This can help reducing context switching and can speed up development
- No inline styles! In the end it is just CSS written with another tool - as we saw above rules are inserted into an actual style tag by the library
- It can be prerendered on the server. This way your site sends only the CSS for the page that is serving right now
- You don't need naming conventions anymore
- You don't need to know where the styles are coming from since they are defined locally per component

## What about the Cascade?

Component-based systems are great because they allow us to reuse and compose many pieces together. For example, one could create a reusable and styled paragraph component and reuse it all over the codebase.

Cascade usually is useful to avoid repetition, but with a reusable JS component we are in fact achieving a similar result: we write our styles once and then use our styled paragraph component instead of a "naked" one!

However, by scoping our CSS to the component, our styles won't accidentally leak into some parts of our web page.

Furthermore, with CSS in JS inheritance continues to work! This means that elements keep inheriting [_inherited_ properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#Inherited_properties) like `color`, `font-size`, `line-height` from their anchestors until you override them. This is a sutble detail that many often ignore.

## Who is this for?

Usually, for the ones who write their HTML in JavaScript eg. with lit-html (Polymer), React, Vue, etc.

However, CSS in JS is a good solution also for more traditional approaches where you'd create HTML elements with JavaScript for the purpose of implementing a jQuery plugin or constructing some HTML after an AJAX request.

### Yes, but when I see that syntax I throw up in my mouth.

Fair enough, probably you don't fancy JavaScript like I do!

The good news is that CSS in JS doesn't refer to a specific syntax or library. In some cases, you are not even required to write styles in JavaScript, and can use your preprocessor of choice.

There are libraries like styled-jsx, CSS Modules, linaria, Astroturf, Vue, Svelte, lit-html that allow you to write regular CSS.

I even have [an example](https://twitter.com/giuseppegurgone/status/1061255277033504769) ready for you.

Under the hood they use a bit of JavaScript to provide most of the benefits that I've been talking about in this article, but the syntax is unchanged.

In fact I like to see CSS in JS more like a tool than an ugly bunch of CSS in JavaScript objects.

## Conclusion

I want to conclude this write-up with a reflection on team work and conventions.

I read a few times that "people should just learn CSS" rather than looking for answers (and solutions) in CSS in JS.

While I think that learning something new or master a language never hurts, I also think that many ignore the fact that we work with people (teams and organizations) with diverse backgrounds and expertise.

This is great because different expertise makes for a great end result.

In an organization where individuals and teams work on the same product it is however unrealistic to expect that only specialists get to write CSS or that everyone must be a CSS specialist.

The reason why folks move to CSS in JS has to do with letting a tool do the dirty work of enforcing some rules for everybody by making that the default. I failed too many times at trying to make conventions like BEM & friends work at org level.

At a larger scale good intents and conventions rarely work. The only reliable way in my opinion (and experience) is tooling, because skills are not measurable and are diverse.

**CSS in JS is a tool**!
