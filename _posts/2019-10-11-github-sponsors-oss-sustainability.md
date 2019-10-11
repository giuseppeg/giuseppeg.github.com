---
layout: post
title: GitHub Sponsors and OSS Sustainability
date: 2019/10/11
disqus: true
preview_image: https://user-images.githubusercontent.com/711311/66648001-ac98fe00-ec2a-11e9-9d21-abde030741f1.png
---

Recently I received an invite to the GitHub Sponsors program so I figured I'd make a sponsorship page. Building [my sponsorship profile](https://github.com/users/giuseppeg/sponsorship) was fun!

<figure>
<img src="https://user-images.githubusercontent.com/711311/66648695-78bed800-ec2c-11e9-8cf3-6a46c5bd3511.jpeg" alt>
<figcaption>My Sponsorship Profile.</figcaption>
</figure>

Having to define dontation tiers was an interesting exercise because I had to figure out reasons that would convince (will them?) people that the donation is worth it somehow. What can I offer in my spare time? What are supporters getting in return? Is that valuable?

## Will it work?

Getting people to donate is a very hard thing to do, and it is definitely harder for the ones who are not influencers because they lack visibility.

Not to mention that asking for a donation feels a bit like asking for money on the street to strangers, maybe for a service that you deliver to somebody else. 🙃

In the end I have a job and I am lucky enough to not have to rely on OSS funding to make a living. I work on side projects and OSS at random times and for fun, so much so that I started a (very WIP) personal [Open Source Contributor Manifesto and Policies](https://github.com/giuseppeg/contributing) to communicate this to others:

<figure>
<img src="https://user-images.githubusercontent.com/711311/66649390-5332ce00-ec2e-11e9-84c5-e068622043d7.jpeg" alt>
<figcaption>Open Source Contributor Manifesto and Policies.</figcaption>
</figure>

If you want to pursuit the OSS funding path my recommendation would be invest in personal branding first.

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet" data-conversation="none" data-link-color="#008000"><p lang="en" dir="ltr">Want to know the real answer? Marketing!<br><br>- Speak at confs<br>- Write articles<br>- Tweet tweet tweet tweet tweet</p>&mdash; Max Stoiber (@mxstbr) <a href="https://twitter.com/mxstbr/status/1026334495975329793?ref_src=twsrc%5Etfw">August 6, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Alternatives to donation-based systems

GitHub Sponsors and donation based platforms are great for some but, ultimately, I think that the path to OSS sustainability is to reward developers based on usage stats (installs or consumers/licenses).

For example I have this tiny project that has 24k downloads a month. It is definitely providing value, how can that translate to a few bucks? 🤷‍♂️

<figure>
<img src="https://user-images.githubusercontent.com/711311/66648696-78bed800-ec2c-11e9-81b2-1ba89b4cf668.png" alt>
<figcaption>Non-profitable OSS with 24k monthly download.</figcaption>
</figure>

### Paid Packages

A, very controversial, solution that I have had in mind for a while is _paid packages_.

Library owners could make a buck from every user of their library by integrating with a centralized service that would require customers to provide a license token (in the form of environment variable) when they install a library. When users haven't paid for the library the install would fail.

{% highlight bash %}
$ PAID_PACKAGES_TOKEN=123 pip install <package-name>
🔴 PAID PACKAGES: Error
   <package-name> is a paid package.
   In order to use it please donate $1 a month to it.
   https://paidpackages.io/support/package-name
{% endhighlight %}

Core members (maintainers) of packages would do revenue share or collect funds under an organization. Occasional contributors would either get some kind of credit or get to use the library for free.

You can read [more about this idea on GitHub](https://github.com/giuseppeg/paid-packages).

### Support and Training

Selling support and training is probably the most viable options for people who want to live off Open Source Software. I doubt though that this is a viable option for the ones who work on OSS in their spare time.

### Getting Hired

There are companies that use and produce Open Source Software all the time. An example is ZEIT or Gatsby. Getting a job at such companies could potentially mean that you wouldn't have to work on OSS in your spare time anymore.


### npm Inc.

npm Inc. is in a unique position because they own the biggest and most popular package registry and because they don't yet provide a service to package owners to monetize their software.

I really hope that they are monitoring the donation based space and eventually will come up with a better solution for everybody (even the small _fishes_) that is **not yet another donation based platform**!
