---
layout: post
title: "Food"
---

Cooking is one of my hobbies and passions. For me it is a form of meditation – it helps me disconnect, brings me joy and stimulates all my senses.

<style>
  .Food img {
    max-width: 100%;
    height: auto;
    width: auto;
  }
  .Food figure {
    margin-bottom: 6em
  }
  .Food .Image {
    position: relative;
  }
  .Food h3 {
    margin: 0;
    font-weight: 600;
  }
  .Food p {
    text-transform: initial;
  }
  .Like:after {
    position: absolute;
    content: "❤";
    font-size: 80px;
    color: transparent;
    text-shadow: 0 0 0 var(--background-color);
    line-height: 1;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    animation: like 2s ease-in-out forwards
  }
  @keyframes like {
    0% {
      opacity: 0;
      transform: translate(50%, 50%) scale(0.1)
    }
    20% {
      opacity: 1;
    }
    25% {
      transform: translate(50%, 50%) scale(1.5)
    }
    50% {
      transform: translate(50%, 50%) scale(1)
    }
    90% {
      transform: translate(50%, 50%) scale(1)
    }
    100% {
      opacity: 0
    }
  }
  .HireMe { display: none }
  @media screen and (min-width: 700px) {
    .Article-back {
        -webkit-transform: translate(-2rem,2.8rem);
        transform: translate(-2rem,0.6rem);
    }
  }
</style>
<div class="Food">
{% for meal in site.data.meals %}
  <figure>
    <div class="Image">
      <img src="{{ meal.pic }}" alt width="200" height="200" loading="lazy">
    </div>
    <figcaption>
      <h3>{{ meal.title }}</h3>
      <p>{{ meal.description }}</p>
    </figcaption>
  </figure>
{% endfor %}
</div>

<script>
  let dblp = false
  document.querySelector('.Food').addEventListener('click', event => {
    if (!dblp) {
      dblp=setTimeout(() => {
          dblp=null
      }, 301);
      return;
    }
    clearTimeout(dblp);
    dblp=null;

    const figure = event.target.closest('figure')
    if (!figure) { return }
    const image = figure.querySelector('.Image')
    if (image.classList.contains('Like')) { return }
    event.preventDefault()
    image.classList.add('Like')
    gtag("event", "food_like", {
      "event_category": "like",
      "event_label": "food like",
      "value": figure.querySelector('h3').textContent
    });
  });
</script>
