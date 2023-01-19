---
title: 'Improving Anchor Links'
description: 'This post outlines a few little tricks you can use with your anchor links'
slug: 'improving-anchor-links'
pubDate: 2022-06-24
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1656107583/Mykal%20Codes/rick-rothenberg-Nqx3SaMp4kQ-unsplash.jpg
tags: ['webdev']
draft: false
---

This post outlines a few tricks that I've been re-discovering over and over again. To save time, I thought I would do a quick write-up documenting them so I know where to look next time I need them.

## What is an anchor link?

Let's start off by defining what an "anchor link" is. I would define an anchor link as a fundamental browser feature, that requires a few things to work:

- an HTML element with a unique id: `<h2 id="go-to-website-stack">Go To Website Stack</h2>`
- a URL that references that unique id: `https://mykal.codes/posts/whats-your-goto-web-stack/#go-to-website-stack`

When someone navigates to that URL, it will scroll to the position of the corresponding HTML element on the page.

I'm sure you've seen these used in a table of contents for an extensive blog post, or to jump to a specific section on a restaurant's menu page. **This post is going to summarize some of the cool things you can do with those anchor links.** I use them in [my coffee post](/posts/coffee-setup) for a table of contents.

### Alternate names

these anchor links go by a bunch of other names as well, you may know them as:

- ID-based links
- Tagged links
- Jump links
- Inline links
- On-Page links

Shoutout to the [d-d-d-discord](https://www.patreon.com/shoptalkshow) for this list.

## Scroll margin on top of the element

If you want to use these links on a site that has a sticky header element at the top of the viewport, you'll probably notice things won't go to plan. Typically these links are hidden underneath the sticky header.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="RwQXYrj" data-user="mykalmachon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mykalmachon/pen/RwQXYrj">
  Anchor Link: Margin Example (Broken)</a> by Mykal Machon (<a href="https://codepen.io/mykalmachon">@mykalmachon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Do you see how the heading with the unique ID is below the sticky header?

There are a few CSS rules we can throw in to add some space between the top of the viewport, and the associated element.
See an example of this fixed here:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="YzemOGr" data-user="mykalmachon" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mykalmachon/pen/YzemOGr">
  Anchor Link: Margin Example (Broken)</a> by Mykal Machon (<a href="https://codepen.io/mykalmachon">@mykalmachon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Temporary animations on arrival at element

Another thing you can do to improve the user experience of these anchor links is adding an animation/style to emphasize the part of the document you've linked to.

I tend to do this by adding a quick "blink" animation to the heading in question:

```css
@import 'https://unpkg.com/open-props';

:target {
  animation: var(--animation-blink);
  animation-timing-function: var(--ease-3);
  animation-duration: 0.5s;
  animation-iteration-count: 5;
}
```

But you can also add a background to the element, a border, or anything else you can think of doing in CSS.

```css
@import 'https://unpkg.com/open-props';

:target {
  background: var(--yellow-6);
  border-bottom: 2px solid var(--yellow-9);
}
```
