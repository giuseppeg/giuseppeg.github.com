---
layout: post
title: The blog about nothing
date: 2015/08/09
tldr: "Sometimes I like to code useless things just for the sake of writing code. Last weekend I modded [an existing blog](https://github.com/anthonyshort/anthonyshort.github.io) that you can now [re-mod](https://github.com/giuseppeg/giuseppeg.github.com) or use as-is if you want."
tweet_id: 630568797884190720
private: true
---

I wanted to code something that wasn't for work so I put together a Jekyll blog which is now running on github pages.

I like simple and minimal designs so I started to look around for inspiration and I stumbled upon @anthonyshort's [site](http://anthonyshort.me). His blog is neat and pretty much what I wanted, so I just forked it.

I ended up tweaking the design and typography a bit and do some cleanup to make it more appealing... to me (and you hopefully).

## Writing

I am *not* a serial writer so chances are that this will end up being *another blog... about nothing*.

This time though I am going to try "offline-first writing" and see how it goes. I want to take breaks from the screen and go to a park at least once a week &mdash; I will bring a paper notebook and see if I can write something down.


## Open Source

Feel free to clone and mod this blog.

At the moment I host it together with my personal one-page site under the same github repo.
So you'll have to do a (very!) little work to clean it up.

{% highlight bash %}
mkdir blog && $_
git clone https://github.com/giuseppeg/giuseppeg.github.com .

npm install # install npm dependencies
bundle install # install jekyll and its deps
{% endhighlight %}

The first thing you may want to do is delete my posts. I added an npm script that does it for you.

{% highlight bash %}
npm run format
{% endhighlight %}

`format` will save a copy of them under `_backup/`.

### Development

I added two npm scripts to build css and serve Jekyll (in watch mode) locally.

{% highlight bash %}
# compile/build the css
npm run build

# serve Jekyll locally at http://localhost:4000
npm run serve
{% endhighlight %}

The CSS is under the `assets/` folder and is organized in [Components](https://github.com/componentjs).

CSS is preprocessed with [Myth](http://www.myth.io).

There are a few global variables in `assets/stylesheets/index.css` that you can customize to tweak the look and feeling of the site.

### Configuration

All the settings are in `_config.yml`.

`index_path` is the path to the blog archive/index.<br>
You may want to set it to `/`. If you do so make sure to remove `/blog` from `paginate_path`.


`navafter` is used internally to decide the navigation position.<br>
When set to `true` the nav is moved after the post/posts list.

## Examples

From here on I will showcase the features included in this theme.<br>
Take a look at the [source code](https://github.com/giuseppeg/giuseppeg.github.com/blob/master/_posts/2015-08-09-the-blog-about-nothing.md) of this post to see what renders what.

### Code example

{% highlight javascript %}
Array(16).join('wat' - 1) + ' Batman!';
{% endhighlight %}

### Quote

The code example above is from:

<blockquote>Wat &mdash; A lightning talk by Gary Bernhardt from CodeMash 2012</blockquote>

### Video

which I am embedding here for you to watch (really do it! :)

<video class="Video" width="700" height="525" preload="none" controls>
  <source src="https://s3.amazonaws.com/destroyallsoftware-talks/wat.mov?AWSAccessKeyId=AKIAIKRVCECXBC4ZGHIQ&Expires=1439107489&Signature=lWtOgFrOF7CHIy7vFEO8%2B8AnKNA%3D" />
</video>

### Lists

Silly / kewl hover effect for list items:

*If you were on an island and could only bring three things, what would you bring?*

* pizza
* pizza
* some pics of pizza

### TL;DR

You can define a `tldr` variable in the [YAML Front Matter](http://jekyllrb.com/docs/frontmatter) at the top of the file.

Jekyll will generate a <abbr title="Too Lazy Don't Read">TL;DR</abbr> block at the beginning of the article. You can use markdown but make sure that the entire block is quoted.

### Figure

You can add images using the html5 `figure` element.

I have an [instagram account](https://instagram.com/giuseppegurgone/) where sometimes I post photos.

<figure>
<img src="https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11357444_893580074035264_1629718631_n.jpg" alt>
<figcaption>I used to live in Copenhagen. This is a photo taken in autumn.</figcaption>
</figure>

fin.
