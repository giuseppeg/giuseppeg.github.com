---
layout: post
title: Automating Accessibility Tests with Puppeteer
date: 2019/11/22
preview_image: https://user-images.githubusercontent.com/711311/69422878-242b7400-0d25-11ea-880b-b84c0dfc09bc.png
---

Recently I gave a mini talk at [React Vienna](https://twitter.com/reactvienna) about automating WAI-ARIA Authoring Practices tests with Puppeteer.

You can find [the recording at the end of the post](#recording-embed).

WAI-ARIA Authoring Practices is a guide for understanding how to use WAI-ARIA 1.1 to create an accessible Rich Internet Application. Specifically the [site](https://www.w3.org/TR/wai-aria-practices-1.1/) comes with guidelines and examples for common design patterns and widgets like modal dialogs, tabs etc.

A while ago Facebook funded Bocoup to write regression tests for the examples in the WAI-ARIA website, and obviously Bocoup wrote about [this project](https://bocoup.com/work/ensuring-correctness-of-w3c-accessibility-examples) on their blog.

When I read the article I had the idea of creating a similar suite of tests that would be generic enough to be used in any application with very little setup.

This is when I created [WAI-ARIA-Practices-Tests](https://github.com/giuseppeg/wai-aria-practices-tests) – a proof of concept where I wrote [tests for modal dialogs](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) using Puppeteer.

<figure>
  <img src="https://user-images.githubusercontent.com/711311/69425094-8cc91f80-0d2a-11ea-9324-632c4c8c050a.png" alt>
  <figcaption>A sample test using Jest. <span class="u-visuallyHidden">Check out examples folder of the the GitHub repo for a readable version of this example: https://git.io/JeiTL</span></figcaption>
</figure>

<figure aria-hidden="true">
  <img src="https://user-images.githubusercontent.com/711311/69426291-d57dda00-0d24-11ea-8571-fd9ea65aff09.jpg" alt>
  <figcaption>Result.</figcaption>
</figure>

All the examples are available at [the GitHub repository](https://github.com/giuseppeg/wai-aria-practices-tests/tree/master/examples).

The purpose of the tests is to validate behavior and provide a baseline set of checks to run in CI. Such a toolset wouldn't replace manual testing and other types of checks like validation of correct document outline, misuse of aria and role attributes etc.

Finally please keep in mind that this idea and library are a proof of concept and would need further thinking and validation.

## Recording

Enjoy [the recording](https://www.youtube.com/watch?v=1rJ2_R1gcB0)!

<iframe aria-label="youtube embed of the video talk" class="Video" id="recording-embed" src="https://www.youtube.com/embed/1rJ2_R1gcB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
