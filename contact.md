---
layout: page
title: Giuseppe Gurgone
subtitle: JavaScript and Web Engineer
---

Senior JavaScript and Web Engineer with a decade of industry experience and available for freelance collaborations.

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
      <option value="Design Systems">Design Systems</option>
      <option value="Product">Product Development</option>
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

## Areas of Expertise

- JavaScript infrastructure, tools and workflows
- Performance audits and optimization of React applications and libraries
- Babel plugins development and large scale automated code transformations
- Scaling Design Systems
- CSS and CSS-in-JS
- Mentoring, teaching, productivity & engineering processes

## Clients

Over my career I lived in five different countries and worked for great companies and with great customers:

Yelp, Automattic, DatoCMS, Vercel, Swiss Red Cross, PSPDFKit, Graduateland.

Some of my open source work runs on wordclass websites like TikTok, Hulu, Nike, Vercel, Tencent News (xw.qq.com).

Over my career I also built direct and privileged connections with engineers and leaders who work at Google, Facebook, Yelp, Uber, Netflix, Vercel, Twitter, Amazon and many more.

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
