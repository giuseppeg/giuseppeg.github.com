---
layout: post
title: Strike Through Text Effect with JavaScript
date: 2020/11/05
preview_image: https://user-images.githubusercontent.com/711311/98287679-fecf5e80-1fa5-11eb-9394-d6776c4fab30.png
---

Always wondered how to strike-through some text? Here is all it takes

{% highlight javascript %}
const strikeTrough = (text) =>
  Array.prototype.reduce.call(text, (s, c) => (s += c + "\u0336"), "");

`I love ${strikeTrough('pineapple on')} pizza`
// I love p̶i̶n̶e̶a̶p̶p̶l̶e̶ ̶o̶n̶ pizza
{% endhighlight %}

Paste the following snippet in the DevTools console (Cmd+Option+j):

{% highlight javascript %}
window.prompt(
  "",
  Array.prototype.reduce.call(
    window.prompt("Type Something"),
    (s, c) => (s += c + "\u0336"),
    ""
  )
);
{% endhighlight %}
