---
layout: post
title: 'Privacy: hide your personal e-mail on GitHub'
date: 2016/11/13
tweet_id: 797912649690451968
hn_id: 12945752
---

If you work on Open Source Software chances are that you are exposing
your personal or work e-mail address to the public.

If you clone any public repo and you run `git log` inside of its folder
you get a list of commits which includes the e-mail addresses of the authors.

<figure>
<img src="https://cloud.githubusercontent.com/assets/711311/20247764/702a80dc-a9d5-11e6-80b7-d7d8880dc097.png" alt>
<figcaption>ReactJS - sample commit history.</figcaption>
</figure>

Don't get me wrong **this is not a bug**.

However, I don't know about you but, I am not comfortable with sharing my personal
 e-mail address with the entire World.

### Then hide it!

GitHub has a feature to keep your e-mail address private and prevent
it to show up in their website.

<blockquote>
If you are worried about spam or have other privacy concerns
you can always use a private GitHub address instead.
<br><br>
You can use the email address &lt;username&gt;@users.noreply.github.com
for all operations supported by GitHub Flow in the browser.
</blockquote>

Basically do the following from your terminal:

{% highlight bash %}
git config --global user.email "username@users.noreply.github.com"
{% endhighlight %}

Replace `username` with your actual GitHub username.

Finally [turn on the feature](https://help.github.com/articles/keeping-your-email-address-private/#step-1-tell-github-to-keep-your-email-address-private) in the [GitHub e-mail settings page](https://github.com/settings/emails).

As a consequence of this operation your e-mail address
will be `username@users.noreply.github.com` in the git history too.

### Fixing old commits

Keep in mind that the suggested changes will only affect new commits.

If you want to patch the entiry history of a repo GitHub has a
[simple tutorial](https://help.github.com/articles/changing-author-info/)
that explains how to do so.

### PRs and misc

I am not sure if you can patch Pull Requests to
repositories of other people or orgs.

It might be possible to submit a PR with the fix but the repo
owner should be cool with you pushing with `--force` I guess.

If you have any idea around this topic please [tweet me](https://twitter.com/giuseppegurgone)
