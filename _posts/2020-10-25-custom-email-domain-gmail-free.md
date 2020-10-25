---
layout: post
title: How to Use a Custom Email Domain with Gmail for Free
date: 2020/10/25
preview_image: https://user-images.githubusercontent.com/711311/97114296-edf23380-16ef-11eb-9f50-791e2e6a69af.png
---

In this tutorial you will learn how to link a **custom email address** to
Gmail so that you can **receive** and **send** emails using that address **for FREE** without having to pay for [a GSuite subscription](https://workspace.google.com/){:target="\_blank"}.

<span style="display: block; text-align: center; margin-top: 3em; user-select: none" aria-hidden="true">
🌍 → `contact@yourdomain.com`
</span>

<span style="display: block; text-align: center; margin-bottom: 3em; user-select: none" aria-hidden="true">
`contact@yourdomain.com` → 🌍
</span>

With this method you can create as many Email addresses as you want!

### The Goal

- (Create) a custom Email address `test@ggurgone.com`
- (Receive) Redirect Emails sent to this address to `myusername@gmail.com` (Gmail)
- (Send) Setup Gmail so that we can send Emails as `test@ggurgone.com`

<small>Note that custom addresses can be used only for Email and won't be linked to your free GSuite services like Google Docs, Sheets, Slides, Drive etc. For that you would need to use your Gmail account.</small>

## Requirements

- Buy a domain. I buy mine on [Namecheap](https://namecheap.com){:target="\_blank"}
- Register a free [Gmail](https://gmail.com){:target="\_blank"} account

## Create a Custom Email Address

<span style="display: block;" aria-hidden="true">
🌍 → `test@ggurgone.com`
</span>

Once you have bought a domain the registrar will provide you with a way to configure email forwarding.

With email forwarding you can create **virtual email addresses** using your domain and get the messages delivered to `myusername@gmail.com`.

Normally this is done by creating and associating an `alias` to a destination address.

In our case `test` → `myusername@gmail.com`

The alias is the part of our custom email address that comes before `@ggurgone.com` and it can be what you want.

Please follow the instructions from your registrar page:

- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding){:target="\_blank"}
- [GoDaddy](https://www.godaddy.com/help/set-up-my-forwarding-email-address-7598){:target="\_blank"}
- [Google Domains](https://domains.google/learning-center/how-to-use-email-forwarding/){:target="\_blank"}
- [DreamHost](https://help.dreamhost.com/hc/en-us/articles/215724207-How-do-I-add-a-forward-only-email-address-){:target="\_blank"}
- [IONOS](https://www.ionos.com/help/email/setting-up-mail-basic/creating-a-forwarding-email-address/){:target="\_blank"}
- <form action="https://www.google.com/search" method="get" target="_blank"><input name="q" placeholder="My Registrar Name" title="your registrar" autocomplete="off"><input type="hidden" name="q" value="email forwarding"> <button>search instructions</button></form>

Once you have set up Email forwarding it is time to test it by sending an email to our newly created virtual email address e.g. `test@ggurgone.com`.

That's it 🎉

<small>Note it might take a few minutes for your new email address to work.</small>

## Sending Emails from Alias in Gmail

<span style="display: block;" aria-hidden="true">
`test@ggurgone.com` → 🌍
</span>

We now want to send emails in Gmail using our virtual email address.

In this section we will see how to configure Gmail to add as many custom addresses as we want!

![screenshot](https://user-images.githubusercontent.com/711311/97078867-940a4480-15ef-11eb-9e60-f5efa5513cf2.png)

### This part of the tutorial is only available for supporters

If you think that this part of the tutorial is valuable, You can buy it with one click:

<span class="Note" style="display: block; width: 100%; max-width: 400px; margin: 3em auto; text-align: center;">
  <button id="checkout" style="border: 2px solid; display: inline-block; border-radius: 3px; padding: 0.25em 0.5em; cursor:pointer; margin: 1em 0 1.5em">Buy now</button><br>
  <span style="font-weight:bold;">One time</span> payment
  <span style="font-weight:bold; font-size: 1.3em; display: block;">€4.99 EUR <span style="text-decoration:line-through">€9.99</span></span>
  <small>Get 50％ discount with the `EMAIL50OFF` code</small><br>
</span>

Remember the cheapest GSuite account costs €6 EUR / **user / month**

meaning that with this tutorial you can **save €67 / year!**

<span class="Note" style="display: block; width: 100%; max-width: 400px; margin: 3em auto">
  <span style="text-align: center; display: block; font-weight:bold; margin-bottom:1em">What You Get</span>
  ⋯ step-by-step guidance<br>
  ∞ Infinite Custom Email Addresses<br>
  ✆ Support (via email)
</span>

<section id="checkoutSuccess" class="Note">
  <h2>Success! 🎉</h2>
  <p>Thank YOU for your support!</p>
  <p>We sent you an email with the full tutorial.</p>
</section>
<section id="checkoutError" class="Note">
  <h2>Something went wrong</h2>
  <p>The purchase process failed.</p>
  <p>Please refresh the page and try again.</p>
</section>

<a class="Backdrop" href="#" aria-lable="close modal"></a>

<style>
  #checkoutSuccess,
  #checkoutError,
  .Backdrop {
    display: none;
  }

  #checkoutSuccess h2,
  #checkoutError h2 { margin-top: 0 }
  #checkoutSuccess:target,
  #checkoutError:target,
  #checkoutSuccess:target ~ p .Backdrop,
  #checkoutError:target ~ p .Backdrop {
    display: block;
  }

  #checkoutSuccess:target,
  #checkoutError:target {
    position: fixed;
    z-index: 2;
    padding: 2em;
    background-color: var(--background-color);
    border: 2px solid;
    border-radius: 6px;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%)
  }
  .Backdrop {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(6px);
    cursor: pointer;
  }
</style>

<script src="https://js.stripe.com/v3/"></script>
<script>
  document.querySelector('#checkout').addEventListener('click', function () {
    Stripe(atob('cGtfbGl2ZV81MUhnQnlHSkxPOTRMSkhYQm1DZ1FSaVdEa1FJM0lubmdvZ0ppaExOSGRHMmhRSk1URTdpODFnWjQ3bm40aE5aODFpZ2xhTUc0S3dUMUJod0p5MU01RDZBcTAwZHVjaHBNVTc'))
      .redirectToCheckout({
        lineItems: [
          {price: 'price_1HgCFzJLO94LJHXB1eDo269K', quantity: 1},
        ],
        mode: 'payment',
        successUrl: window.location.href + '#checkoutSuccess',
        cancelUrl: window.location.href  + '#checkoutError',
      })
      .then(function(result) {
        window.location.hash = 'checkoutError'
      }, function(result) {
        window.location.hash = 'checkoutError'
      });
  });
</script>
