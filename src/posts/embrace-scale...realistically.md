---
title: Embrace scale... realistically
slug: embrace-scale-realistically
description: Only provide the scale that your users need. The rest is likely waste.
pubDate: 2022-08-08T07:00:00Z
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1656711520/Mykal%20Codes/database-to-api.jpg
tags:
- devops
draft: true

---
After working in tech for a few years at a medium-sized company, I think "doing things that scale" is a bit overrated. 

I'm not saying that we should half-ass our solutions, or stop caring about performance. **The quality of a solution and performance are important**. What I mean to say is that **the performance of a solution, and the work that's put in to achieve it, should be proportionate to the scale you actually need.** 

* Don't scale to solve facebook sized problems: if you're only going to have a couple of hundred users concurrently. 
* UFV serves tens of thousands of students, admittedly some of our services are slow and need improving, but most of our services are _fast_ at our scale, and realistically won't need to be improved for a _long time, if ever._  
* Hyper-scale doesn't map to reality. Exponential curves in user bases and other systems cannot always be expected.

The main point of this post is just to say that not everything needs to be scaled from day 1 to meet the planet. I've admittedly foot-gunned so many projects trying to worry about performance or scalability before I even have a working prototype.

There are better things to be worrying about like making the damn thing work. 