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

### Fever API Authentication 

It looks like to "authenticate" against a fever API, you have to put your username and password together in the format of `${user}:${pass}` then md5 hash them. You then POST   that string over in the body labelled as `api_key`. 

While this is definitely a weird user of the `POST` verb that's not too hard! Here's some code I used to verify I could authenticate in node.js 

```js
const crypto = await import('crypto')

// set username and API key from commafeed  
const username = "user"
const apiKey = "some-api-key-goes-here" // you can get this in your commafeed profile

// hash user and "password" together in an md5 hash 
const authStr = `${username}:${apiKey}`
const authHash = crypto.createHash('md5').update(authStr).digest('hex')

// make a call to the API 
const res = await fetch(`https://rss.tbx.sh/rest/fever/user/3?api_key=${authHash}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
const data = await res.json();

console.log(data);
/*
// here's what the response looks like 
{
  "api_version": 3,
  "auth": 1,
  "last_refreshed_on_time": 1711829713
}
// the auth being set to 1 means we are authenticated. 
*/
```

### Getting feeds from the Fever API

With authentication figured out, I had to figure out how to get some posts. Thankfully, the docs we have on hand make that pretty obvious as well. It seems all we had to do was slightly alter the URL in our code above from `https://rss.tbx.sh/rest/fever/user/3?api_key=${authHash}` to `https://rss.tbx.sh/rest/fever/user/3?api_key=${authHash}&feeds` aka just add `&feeds` to the end 😎 

It seems fever APIs mostly return objects based on the query parameters on the URL and usually all live at a singular "path". 


## Moving it to the blog

Awesome, so now we know how to authenticate and get feeds, let's move it into the blog.

- create a `follows.astro` page 
- copy-paste that code from above and adapt it to Astro
- add some types
- add some markup 

```astro
---
import crypto from 'node:crypto';
import Layout from "@components/layout/Layout.astro";

// types for the fever data 
type FeedResponse = {
  api_version: number,
  auth: 0 | 1,
  last_refreshed_on_time: number,
  feeds: Feed[],
  feed_groups: [
    {
      group_id: number,
      feeds: string
    }
  ]
}

type Feed = {
  id: number,
  favico_id: number,
  title: string,
  url: string,
  site_url: string,
  is_spark: number;
  last_updated_on_time: number;
}

const username = import.meta.env.RSS_USERNAME
const apiKey = import.meta.env.RSS_API_KEY;
const apiUrl = import.meta.env.RSS_API_URL;
const authStr = `${username}:${apiKey}`
const authHash = crypto.createHash('md5').update(authStr).digest('hex')

// make a call to the API 
const res = await fetch(`${apiUrl}?api_key=${authHash}&feeds`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
const data: FeedResponse = await res.json();

console.log(data);
---

<Layout title="Follows" description="the blogs I follow">
  <h1>Follows</h1>
  <p>Below are the blogs I'm currently following.</p>
  <ul>
  {data.feeds.map((feed: Feed) => {
    return (
      <li>
        <a href={feed.site_url}>{feed.title}</a>
      </li>
    )
  })}
  </ul>
</Layout>
```

### Cleaning up `site_url`'s

The `site_url` key in the feed object is *supposed* to reference a URL with human readable content (i.e a home or posts page). However, some of the feeds I follow just set their RSS url in this feed again. Since I want to use this link to point visitors to sites, I want to normalize these URLs. The easiest way I could think of doing this is just passing `site_url` int the `new URL()` constructor and returning the origin from the returned URL object. 


```astro
---
// getting the data up here

const cleanSiteUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    return urlObj.origin;
  } catch(err){
    return url
  }
}
---
<!-- some markup -->
<ul>
  {data.feeds.map((feed: Feed) => {
    return (
      <li>
        <a href={cleanSiteUrl(feed.site_url)}>{feed.title}</a>
      </li>
    )
  })}
</ul>
<!-- some other markup -->
```

### Puttin' some paint on it