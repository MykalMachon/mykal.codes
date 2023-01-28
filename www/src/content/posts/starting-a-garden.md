---
title: 'Starting a Garden 🍅'
type: 'post'
description: "I released an overhaul of my site a few days ago. You're looking at it!"
pubDate: 2023-01-25
draft: true
tags: ['update', 'meta']
---

I redid my site! ... again!

I've been messing around with the look and feel of this site on a dev branch for a few months,
and started a dedicated feature branch for the overhaul a few weeks ago. I'm pretty happy with the
_look_, but I made more than just stylistic changes. **I added some content types, ripped out some features,
and moved all my old content over to `/garden/posts`**

So what gives? what is a digital garden anyways? when's the next redesign?

## What's a Digital Garden

I won't spend too much time digging in, but I stand on the shoulder's of dev giant's here.
[Maggie Appleton](#test) has a [great post going over the concept](#what-else-has-changed), and so does [Joel Hooks](#what-else-has-changed). With their explanations in mind, I have a few other things that I think feel _garden-like_ in the way I've designed the site this time around:

### Keep it messy

I don't want everything on this site to have the implicit pressure that a "Blog Post" does. Believe it or not, I don't want every post I write to be a masterpiece.
Sometimes I just want to put my thoughts out into the aether, without a lot of formality, and see if they stick, use them as a reference point, see what others think. you know?

A lot of my ethos for this site was inspired by Rachel Smith's post on how she was able to blog actively this year.
_She also calls her site a digital garden... what a coincidence!_

### Keep it simple

I've kept it architecturally simple by design. There aren't a lot of lock-in dependant features. The post likes and comments I had on here before were great, but were examples of features that had heavy lock-in. This site could realistically live on a 11 year old computer in a basement, but tools like netlify let me add performance and feautres on top.

in 5-10 years, I don't want to lose a bunch of photos, ideas, and little pieces of my personal history because a billion-dollar baby blew up my website. This site is all static files, generated via an open-source framework, and can realistically be hosted on a computer anywhere with an internet connection and a port-forwarded router. _Like a cockroach, it will survive._

### Be a good steward

Posting to my own site first is an act of stewardship (of the internet anyways). An independant and individual internet is a health interent, and by keeping it simple I've prettty much gauranteed as long as the internet works this site _could_ be online.

## What else has changed

I either ripped outt, or replaced, a bunch of features that I wasn't happy with.
This includes (but is not limited to):

- 🗑️ GitHub comments via Utteranc.es: easy to setup, didn't like the look.
  - ✨ Replaced with Webmentions! 
- 🗑️ Custom reactions via Cloudflare: was fun to build, but didn't love how much baggage was attached.
  - ✨ Replaced with Webmentions!
