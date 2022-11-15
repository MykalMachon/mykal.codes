---
title: MIT, Sans-elon
slug: mit-sans-selon
description: About MIT license, but Elon Musk and all of his companies are explicitly
  denied usage.
pubDate: 2022-11-15T01:00:00Z
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1668473838/Mykal%20Codes/MIT-SE_1_k6tpdk.png
tags:
- open-source
- self-hosting
- webdev
draft: false

---
A few friends and I were talking about the hot-topic of the Elon Musk twitter takeover, specifically, we were talking about this tweet: 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Btw, I’d like to apologize for Twitter being super slow in many countries. App is doing &gt;1000 poorly batched RPCs just to render a home timeline!</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1591853644944932865?ref_src=twsrc%5Etfw">November 13, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This tweet is ridiculous for so many reasons: 
- It doesn't really make any sense, seemingly just some technobably slapped together to seem intelligent. 
- Even if you give Elon the benefit of the doubt and say by "RPC" he meant REST / HTTP calls, Batching them won't neccesarily improve performance given HTTP2. 
- Someone was [seemingly fired](https://twitter.com/MattBinder/status/1592193172830318592) from Twitter's Android app team for [pointing out that the tweet is plain wrong](https://twitter.com/EricFrohnhoefer/status/1591902285403418624). Firing the SME on your product, who has likely worked to make the product faster isn't a good look. 
- The whole thing really just feels like something out of HBO's silicon valley. 

Just having talked about all of this, a friend joked that someone should create an MIT license that explicitly denies Elon Musk or any of his companies usage of the associated software. [So I did, it's called MIT-SE and you can check it out here.](https://github.com/MykalMachon/MIT-SE) 

1. Is this a ridiculous idea, that's mostly just to make a few friends laugh? yes!
2. Is it likely that I'll use it in some of my toy open-source project, also yes! see point 1 for why. 