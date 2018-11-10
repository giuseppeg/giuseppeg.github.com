---
layout: post
title: CSS in JS is Stupid
date: 2018/01/13
tldr: "Once a former co-worker of mine stated that \"CSS in JS is Stupid\". This is an informal and not polished reply to his statement.
\n\n
Conventions and good intentions don't work at scale (2+ people :). Tools can help with that. CSS-in-JS is a tool, but similar tools could be built outside of JS too. See [DSS](https://github.com/giuseppeg/dss)."
tweet_id: 952173266206101506
private: true
---

When we talk about CSS in JS the "in JS" part is often just an implementation detail and commodity.

Assuming that we all aim to write modular, component-based code and want to write static only CSS, JavaScript per-se is not a requirement at all. What is important are the patterns and benefits that some of the CSS-in-JS libraries bring to the table.

In fact, scoped styles can also be written in plain _CSS Modules_ and, with the help of an adapter, any language or templating system can consume them.

For example [DSS](https://github.com/giuseppeg/dss), an experiment of mine, brings most of the benefits of CSS-in-JS while keeping styles static in regular `.css` files.

> How about cascade? In many cases CSS-in-JS completely breaks the cascade

Cascade is a very powerful CSS feature but, as always, with great powers come big responsibilities. The problem with cascade is that it is not always predictable. My opinion here is that if we don't have control over the cascade, then it is better to keep it out of the equation.

Each element (HTML tag) should be affected only by one ruleset and selectors should all have the same specificity but most importantly the result of applying some CSS/classes to an element should be predictable.

When writing (complex) selectors with different specificy and in different places we need to deal with cascade issues and non deterministic styles resolution i.e. in a big system we cannot always tell with confidence which rules will apply and/or overrule others at a given point in time.

{% highlight html %}
<div class="a b">hello</div>
{% endhighlight %}

Even in trivial cases like the one above it is not easy to tell which rules will apply to the `div` eventually.

Even when using CSS-in-JS deterministic resolution might not be always guaranteed - e.g. even CSS Modules suffers of these issues.

Some other CSS-in-JS implementations solve this issue. See [React Native for Web](https://github.com/necolas/react-native-web) and [DSS](https://github.com/giuseppeg/dss).

If we were a disciplinate mass of engineers who used one CSS class per HTML tag and we didn't have state `:hover`, `:focus`, `.is-open` etc then this might not have been an issue.

Finally many confuse _Cascade_ with _Inheritance_.

_Inheritance_ is about inherited properties (surprise) like `color`, `font` etc. Those are not reset or controlled in most of the CSS in JS libraries or even ShadowDOM.

> sounds like something good conventions and a linter could easily solve

This is a common remark. In reality it's never worked that well at the company we both work[ed] for or at any other job really :)

Why fighting to enforce a convention or good practice when we can get that from a tool and out of the box? No exceptions, hacks, lazy day etc.

We can get this to work in Python, Ruby, PHP or any other language really.

DSS for example, produce maps of `{ actual: [scoped] }` class names. Basically a dictionary that we can import in our templates and use to reference the unique, scoped classes which are generated at build time by a tool.

> it requires a (typically complex and slow) build system

What doesn't nowadays? SASS requires a build system too. In fact I remember that at some point we started to contribute to its C/C++ compiler to be able to switch to that and improve our build time.

Some CSS in JS libraries like [emotion](https://github.com/emotion-js/emotion) don't even require a build step and are very perfomant.

Anyway, with such a modular system Server Side Rendering is straightforward and with very little work we can also get critical CSS extraction by creating a list of modules for each view and dumping `link` tags on the page.

Technically we could even create bundles out of those lists and deliver only a file with the amount of CSS needed for a page to look as expected.

Yes, there will be repetition and somebody will create a `common` bundle. This bundle is cached and shared across pages and each single page has to load the remaining styles.

Moving on, our page is SSR-ed and we are on the client now. The first real issue to deal with is doing progressive enhancement on the client **without loading all the CSS ahead of time**.

Modules can use a little helper to load/unload/dedupe additional CSS bundles depending on the state of the JavaScript component.

One way or another we need some sort of CSS StyleSheets Manager and, since we are on the browser, we cannot use anything but JavaScript to implement this.

For the most part this is what CSS in JS does, and what I would do today if I were to build an application or website with another language.

> it couples your JS to your styles

Just like JSX, CSS in JS is about using the language of choice to enhance the authoring experience and define an easier way to interoperate.

The goal is not to talk about technologies anymore (HTML, CSS and JS) but things i.e. components. In this case coupling is necessary.

JavaScript only happens to be the language of choice in a specific application or website.

A non-js example of this is Cheetah – a template engine for Python. It **couples** HTML with Python for the good.

The good thing about using JavaScript to author CSS is that we have an actual programming language to do things like loops, variables, composition. We don't have to rescue to <q>underpowered quasi-programming languages</q> (preprocessors) to do so.

The author of Mustache.js did a great job at explaining why this is a great idea. You may want to watch his talk:

<iframe class="Video" src="https://www.youtube.com/embed/Vur2dAFZ4GE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I higly recommend to watch this video about styling in React Native for Web!

<iframe class="Video" src="https://www.youtube.com/embed/tFFn39lLO-U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

👋

