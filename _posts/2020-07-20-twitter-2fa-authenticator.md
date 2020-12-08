---
layout: post
title: Two-Factor Authentication on Twitter without a Phone Number
date: 2020/07/20
preview_image: https://user-images.githubusercontent.com/711311/87919636-62299500-ca78-11ea-8a12-f9b7d25044ae.png
private: true
---

I have had [Two-Factor Authentication](#what-the-heck-is-two-factor-authentication) (2FA) enabled on Twitter for a long time.

When I enrolled in 2FA, Twitter supported it only via phone number - they required you to provide a trusted phone number where they'd send you SMS texts with the verification codes.

After the recent [Twitter hack and the rumors](https://krebsonsecurity.com/2020/07/whos-behind-wednesdays-epic-twitter-hack/) that the hackers used a SIM swapping technique to hijack social media accounts, I felt the urge to check whether Twitter provided 2FA via an authenticator app or auth devices like Yubikey.

The good news is that they now do! It seems that they have been supporting alternative and more secure methods for a while and I totally missed it (so did you maybe?):

<div class="Copy-embedTweet">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re also making it easier to secure your account with Two-Factor Authentication. Starting today, you can enroll in 2FA without a phone number. <a href="https://t.co/AxVB4QWFA1">https://t.co/AxVB4QWFA1</a></p>&mdash; Twitter Safety (@TwitterSafety) <a href="https://twitter.com/TwitterSafety/status/1197621020229804054?ref_src=twsrc%5Etfw">November 21, 2019</a></blockquote> <!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</div>

## How to Enable It

You can setup 2FA by going to [https://twitter.com/settings/account/login_verification](https://twitter.com/settings/account/login_verification)

<ul class="CrumbsPath" aria-hidden="true">
  <li>Settings</li>
  <li>Account</li>
  <li>Security</li>
  <li>Two-factor authentication</li>
  <li>Authentication app</li>
</ul>

<figure aria-hidden="true">
<img src="https://user-images.githubusercontent.com/711311/87918959-66a17e00-ca77-11ea-95f0-252c09187f61.png" alt>
</figure>

Twitter has [a simple guide](https://help.twitter.com/en/managing-your-account/two-factor-authentication) with instructions to enable 2FA (skip to _To sign up via authentication app_).

## What the Heck is Two-Factor Authentication

For the ones who are not familiar with Two-Factor Authentication, here is the description from Twitter:

<blockquote>
Two-factor authentication is an extra layer of security for your account. Instead of only entering a password to log in, you’ll also enter a code or use a security key. This additional step helps make sure that you, and only you, can access your account.
<br><br>
After you enable this feature, you will need your password, along with a secondary login method –– either a code, a login confirmation via an app, or a physical security key to log in to your account.
</blockquote>

Enable 2FA and stay safe ✌️

<style>
  ul.CrumbsPath { padding: 0; font-size: 0.9em }
  .CrumbsPath li {
    padding: 0;
    list-style: none;
    display: inline-block;
  }
  .CrumbsPath li + li:before {
    content: ' > ';
  }
</style>
