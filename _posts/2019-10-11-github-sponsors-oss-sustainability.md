---
layout: post
title: GitHub Sponsors and OSS Sustainability
date: 2019/10/11
preview_image: https://user-images.githubusercontent.com/711311/66648001-ac98fe00-ec2a-11e9-9d21-abde030741f1.png
---

Recently I received an invite to the GitHub Sponsors program so I figured I'd make a sponsorship page. Building [my sponsorship profile](https://github.com/users/giuseppeg/sponsorship) was fun!

<figure>
<img src="https://user-images.githubusercontent.com/711311/66648695-78bed800-ec2c-11e9-8cf3-6a46c5bd3511.jpeg" alt>
<figcaption>My Sponsorship Profile.</figcaption>
</figure>

Having to define dontation tiers was an interesting exercise because I had to figure out reasons that would convince (will they?) people that the donation is worth it somehow. What can I offer in my spare time? What are supporters getting in return? Is it valuable?

## Will it work?

Getting people to donate is a very hard thing to do, and it is definitely harder for those who are no influencers because they lack visibility.

Not to mention that asking for a donation feels a bit like asking strangers on the street for money, maybe for a service that you deliver to somebody else. 🙃

~~Overall, I have a job and I am lucky enough to not have to rely on OSS funding to make a living~~. [I am available for hire](/hire-me). I work on side projects and OSS at random times and for fun, so much so that I started a (very WIP) personal [Open Source Contributor Manifesto and Policies](https://github.com/giuseppeg/contributing) to communicate this to others.

If you want to pursuit the OSS funding path my recommendation would be to invest in personal branding first.

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet" data-conversation="none" data-link-color="#008000"><p lang="en" dir="ltr">Want to know the real answer? Marketing!<br><br>- Speak at confs<br>- Write articles<br>- Tweet tweet tweet tweet tweet</p>&mdash; Max Stoiber (@mxstbr) <a href="https://twitter.com/mxstbr/status/1026334495975329793?ref_src=twsrc%5Etfw">August 6, 2018</a></blockquote> <!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</div>

**Update** to date I have **0** sponsors. Clearly I haven't worked on marketing and none of my projects is that valuable, yet I get a constant stream of issues/PRs.

## Alternatives to donation-based systems

GitHub Sponsors and donation based platforms are great for some, but ultimately I think that the path to OSS sustainability is to reward developers based on usage stats (installs or consumers/licenses) or provide services around OSS.

For example I have this tiny project that has 24k downloads a month. In this space it is nothing but nonetheless it is definitely providing value to some. How could this translate to a few bucks? 🤷‍♂️

<figure>
<img src="https://user-images.githubusercontent.com/711311/66648696-78bed800-ec2c-11e9-81b2-1ba89b4cf668.png" alt>
<figcaption>Non-profitable OSS with 24k monthly download.</figcaption>
</figure>

### Services

The more I observe the OSS space, the more I think that the only real way to make OSS sustainable is to build services around it and sell those instead of the software itself.

Focusing on providing services has proven to be working well for many companies.

On the other end this means that individual contributors are now required to build a business to sustain their work on the actual code and not every developer is a business person.

### Paid Packages

A very controversial solution that I have had in mind for a while is _paid packages_.

Library owners could make a buck from every user of their library by integrating with a centralized service that would require customers to provide a license token (in the form of environment variable) when they install a library. When users haven't paid for the library, the install would fail.

{% highlight bash %}
$ PAID_PACKAGES_TOKEN=123 pip install <package-name>
🔴 PAID PACKAGES: Error
   <package-name> is a paid package.
   In order to use it please donate $1 a month to it.
https://paidpackages.io/support/package-name
{% endhighlight %}

Core members of packages (maintainers) would do revenue sharing or collect funds under an organization. Occasional contributors would either get some kind of credit or get to use the library for free.

You can read [more about this idea on GitHub](https://github.com/giuseppeg/paid-packages).

### Support and Training

Selling support and training are probably other viable options for people who want to live off of Open Source Software. I doubt that this is a viable option for the ones who work on OSS in their spare time. The tough truth is that **many OSS contributors have a full time job**!

### Getting Hired

There are companies that use and produce Open Source Software all the time. An example are ZEIT or Gatsby. Getting a job at such companies could potentially mean that you wouldn't have to work on OSS in your spare time anymore.

### Crowdfunding

Starting a campaign on crowfunding sites could be a good way to boostrap FOSS development.

A successful example of this model is [ProseMirror's campaign on Indiegogo](https://www.indiegogo.com/projects/prosemirror/). They managed to raise \$50000 to support the development of the project.

### npm Inc.

npm Inc. is in a unique position because they own the biggest and most popular package registry and because they don't yet provide a service to package owners for monetizing their software.

I really hope that they are monitoring the donation based space and eventually will come up with a better solution for everybody (even the small _fish_) that is **not yet another donation based platform**!

**Update** forget this, [npm has been acquired by GitHub](https://github.blog/2020-04-15-npm-has-joined-github) :)

### A Success Story

If you want to read about a success story check this out [https://calebporzio.com/i-just-hit-dollar-100000yr-on-github-sponsors-heres-how-i-did-it](https://calebporzio.com/i-just-hit-dollar-100000yr-on-github-sponsors-heres-how-i-did-it).

My takeaway from it is that eventually you end up becoming a marketer more than a developer but I guess that's part of the game 🤷‍♂️
