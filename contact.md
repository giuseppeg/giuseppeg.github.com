---
layout: page
title: Giuseppe Gurgone
subtitle: JavaScript and Web Engineer
---

Senior JavaScript and Web Engineer with a decade of industry experience and available for consulting and freelance collaborations.

If you want to hire me, just let me know about your project and let’s talk:

<form action="https://contact-form-fn.vercel.app/api" method="post" class="Form" style="margin: 2rem auto">
  <label
    >Company<input type="text" name="company" placeholder="Acme Inc." required
  /></label>
  <label
    >Your email address<input
      type="email"
      name="email"
      placeholder="contact@acme.com"
      required
  /></label>
  <label>
    Project type
    <select name="project" required>
      <option value="Infra">Tooling and JavaScript infrastructure</option>
      <option value="Audit">Performance or Codebase Audit</option>
      <option value="Team Guidance">Team Guidance</option>
      <option value="Design Systems">Design Systems</option>
      <option value="Other">Other</option>
    </select>
  </label>
  <label>
    Budget
    <select name="budget" required>
      <option value="€1000-3000 EUR">€1000-2000 EUR</option>
      <option value="€3000-5000 EUR">€3000-5000 EUR</option>
      <option value="€5000-10000 EUR">€5000-10000 EUR</option>
      <option value="€10000+ EUR">€10000+ EUR</option>
    </select>
  </label>
  <label
    >Project details<textarea
      name="message"
      placeholder="Hey Giuseppe, let's talk about working together!"
      required
    ></textarea
  ></label>

<div style="display: flex; justify-content: flex-end">
  <button>Send<span aria-hidden="true"> →</span></button>
</div>
</form>

## Services

These days I am mainly working on tooling, architecture and JavaScript infrastructure, web application performance, design systems as well as consulting by offering technical oversight, guidance or leading groups of engineers through all the phases of a project.

In short, I am available for writing code if necessary, but considering my experience my value rather lies in **guiding and advising** your team and helping you **figure out solutions that have a high impact on your business**. That's what I am most interested in doing.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;ve been working with Giuseppe for many years, he&#39;s a great engineer, understands product, and gets things done.</p><br>&mdash; Peter Steinberger, CEO at PSPDFKit GmbH.</blockquote>

With that being said, please let me know if you are seeking other types of help and I'll be happy to discuss it!

## Open Source

Over the years, I have done highly impactful contributions to projects like SUIT CSS, Next.js, React Native for Web and many other projects.

My most successful open source projects are [xm](https://twitter.com/giuseppegurgone/status/1305851405660549122) and Vercel's styled-jsx which I co-authored.

I love to work in public on projects that have an impact to your business and the entirey community.

Hit me up if you want to sponsor my work or need help with open source project.

## Clients

Throughout my career I have lived in five different countries and worked for great companies and with great customers:

Yelp, Automattic, DatoCMS, Vercel, Swiss Red Cross, PSPDFKit, Graduateland.

Some of my open source work runs on world-class websites like TikTok, Hulu, Nike, Vercel, Tencent News (xw.qq.com).

Over the years I have also built direct and privileged connections with engineers and leaders who work at Google, Facebook, Yelp, Uber, Netflix, Vercel, Twitter, Amazon and many more.

<script>
  document.querySelector('.Form').addEventListener('submit', event => {
    event.preventDefault()
    const confirmcode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    const typedcode = window.prompt(`Please confirm by typing the following code:
    ${confirmcode}
    `)

    if (confirmcode !== typedcode.trim()) {
      alert('Wrong code. Please try again.')
      return
    }

    const button = event.target.querySelector('button')
    button.disabled = true

    fetch(event.target.action, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target)))
    }).then(response => {
      button.disabled = false
      if (!response.ok) {
        if (gtag) {
          gtag("event", "contact_error", {
            "event_category": "error",
            "event_label": "contact error",
            "value": `${response.status} ${response.statusText}`
          })
        }
        throw new Error()
      }
      const success = document.createElement('p')
      success.classList.add('Note')
      success.innerHTML = 'Thank you for contacting me! I will get back to you as soon as possible.<br>Have a great day!'
      event.target.replaceWith(success)
    }).catch(() => {
      button.disabled = false
      alert(`⚠ Something went wrong. Please contact me at ${atob('Y29udGFjdEBnZ3VyZ29uZS5jb20')}`)
    })
  })
</script>
