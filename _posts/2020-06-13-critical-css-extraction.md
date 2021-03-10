---
layout: post
title: Critical-ish CSS Extraction
date: 2020/06/13
preview_image: https://user-images.githubusercontent.com/711311/84544531-c29d1800-acfd-11ea-9cfc-ce8fa27dd37b.png
---

In this blog post I want to share a technique for extracting the CSS needed to style a static or server side rendered web page [using JSDOM and PostCSS](#implementing-extraction-with-jsdom-and-postcss).

## What is Critical CSS

Critical CSS is the minimum amount of styles necessary to render the page content that is above-the-fold i.e. the portion of the viewport that is immediately visible when loading a web page.

<figure>
<img src="https://user-images.githubusercontent.com/711311/84544531-c29d1800-acfd-11ea-9cfc-ce8fa27dd37b.png" alt role="presentation">
</figure>

By extracting these styles and inlining them in the HTML page it is possible to improve rendering time as the browser doesn't have to download and parse an external, larger resource.

## The Complexity of Extracting Critical CSS

Extracting Critical CSS is not a trivial task. Tools need to know the dimensions of the viewport and how much content fits in it.

In fact the majority of the tools out there scrape already rendered pages using pre-determined viewport dimensions.

## Critical-ish CSS Extraction: a widespread technique

CSS in JS made it easy to inline **the styles for the entire page** in the HTML that is sent to the browser.

Since styles are bound to the markup that is using them, extraction is fairly trivial.

I call this feature Critical-ish CSS because with this technique we send more than just the CSS to style the above-the-fold content, yet we keep the styles to the bare minimum that is necessary to style the current page.

<p class="Note">
  NOTE: Google suggests that to minimize the number of roundtrips to first render, we should aim to keep above-the-fold content under 14 KB (compressed).<br><br>
  With Critical-ish CSS you can easily exceed this budget.
</p>

## Implementing Extraction with JSDOM and PostCSS

Critical-ish CSS Extraction can be implemented outside of CSS in JS.

When a page is rendered we can feed the resulting HTML to JSDOM to create a DOM from it.

{% highlight javascript %}
const { JSDOM } = require("jsdom")

const html = renderPage()
const document = new JSDOM(html).window.document
{% endhighlight %}

We can then read the full blown CSS bundle for the page and pass it to a PostCSS plugin that will walk through every CSS rule, grab the selector for the rule and see if it matches at least one element in the DOM that we just created.

{% highlight javascript %}
const postcss = require("postcss")

const extract = postcss.plugin("postcss-critical-ish-css", (options = {}) => {
  return root => {
    if (!options.document) { return; }

    root.walkRules(rule => {
      // Preserve rules whose selector includes a standalone :pseudo-class
      // e.g. foo :hover {}
      if (/[, ]:|^:/i.test(rule.selector)) {
        return;
      }
      try {
        if (
          // Check if the selector matches at least one element in the page
          // pseudo-classes are removed because JSDOM can't match :hover etc.
          !options.document.querySelector(
            rule.selector.replace(/:[^ ,.#]+/gi, "")
          )
        ) {
          // removes empty media queries and the like
          if (rule.parent.nodes.length === 1) {
            rule.parent.remove();
          } else {
            // remove unused rule
            rule.remove();
          }
        }
      } catch (e) {}
    });
  };
});
{% endhighlight %}

When executed, the plugin will resolve with the extracted Critical CSS.

{% highlight javascript %}
const { JSDOM } = require("jsdom")

const html = renderPage()
const document = new JSDOM(html).window.document

extract
.process(css, { from: undefined }, { document })
.then(result => {
  const criticalCSS = result.css
  console.log(criticalCSS)
});
{% endhighlight %}

You can see and play with a test case on [CodeSandbox](https://codesandbox.io/s/critical-ish-css-extraction-for-ssr-and-static-sites-z0dcr) where I run the tool on Yelp.com's homepage.

<figure>
<img src="https://user-images.githubusercontent.com/711311/84550378-b8cde180-ad0a-11ea-8c17-314ee69fb079.png" alt role="presentation">
</figure>

The results are interesting:

- Their original homepage.css bundle is 1.2MB
- Their inlined critical CSS is 328KB
- The Critical CSS extracted with the technique from this blog post is **only 83KB**

<small>Sizes are not gzipped.</small>

## Ending notes

Critical CSS Extraction for the above-the-fold content is definitely the best solution but often hard to implement.

The technique described in this blog post is just an idea I had a couple of years ago but never managed to validate or test at scale and therefore it can have flaws.

For example this solution is not runtime aware and it would preserve media queries that would not immediately apply but that contain a selector which matches, or if you are streaming HTML to the browser this technique will not work.

Although not perfect, I believe that this approach could still help a majority of usecases.

<span class="Note" style="display: block;">
  UPDATE: it turns out that I wasn't the only one who thought about this solution. In 2018 [Jason Miller](https://twitter.com/_developit) created a Webpack plugin to do this. It is called [Critters](https://github.com/GoogleChromeLabs/critters) and it will be included in [Next.js](https://github.com/vercel/next.js/pull/16539/files) in the future.
</span>
