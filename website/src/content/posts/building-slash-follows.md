---
title: Building /follows
description: A page the highlights who's blogs I'm following
type: note
pubDate: '2024-03-29'
tags:
- webdev
- javascript
- RSS
draft: true
---

I built out a `/follows` page that lists all the RSS feeds I'm subscribed too. Thankfully, Astro and Commafeed made this very easy to build out.
All I needed to do was: 
1. figure out how to programmatically pull out the blogs I follow from commafeed (my feed reader) 
2. pull the blogs I follow but into an Astro page and create a basic template to display it.  
3. git commit, do a lil pull request, merge into main, and wait for my deploy to Railway to finish.
4. Finished! 

> ℹ️ Note 
> 
> This was inspired by the follows page over on [Kevin Kipp's blog](https://kevinkipp.com/follows/) where he highlights all the blogs he follows via RSS.

## Pulling the data out of commafeed 

I self host an RSS feed reader called commafeed. When I started working on this I just sort of *assumed* they had an API and thankfully they did... It just wasn't a conventional REST API! It's something called a "fever" API.

Commafeed gives you an "API Url" but that's about it as far as documentation goes for it.

### What's a fever API?

I had absolutely 0 idea what a fever API was so I did a bit of searching. Turns out, once upon a time, there was a RSS feed aggregator called "fever" and their API spec seems to have become a defacto unwritten standard for interacting with a feed aggregator. 

On this wild gooes chase, I found a myriad of github pages, README's, and other applications documenting their own fever API integrations. In that mess of pages, [I found this](https://github.com/DigitalDJ/tinytinyrss-fever-plugin/blob/master/fever-api.md). It claims to include a complete copy of the API spec from fever's site (which is now timing out; making this a surviving copy of that lost info).

Awesome, so now we know how to authenticate and roughly what routes I shoudld be calling to get feed information.