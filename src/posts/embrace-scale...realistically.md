---
title: Scale is a requirement
slug: embrace-scale-realistically
description: Only provide the scale that your users need. The rest is likely waste.
pubDate: 2022-08-08T07:00:00Z
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1656711520/Mykal%20Codes/database-to-api.jpg
tags:
- devops
draft: true

---
After just over a year in my first "real" tech job, at a large company (1500+ employees) with hundreds of deployed applications, services, and systems I've slowly come to the realization that building for scale is overrated, _most of the time_.

I'm not saying that we should half-ass our solutions, or stop caring about performance. _The quality of a solution is important_. What I mean to say is that _the performance of a solution, and the work that's put in to achieve it, should be proportionate to the scale you actually need._ 

## Scalability is a requirement

Scalability is a requirement like any other requirement for a project. Not every project needs to be scalable to infinity, and some projects simply don't make sense at a small scale.   Logically then, when we're planning our projects we should probably be planning for the required scale of the project. 

I know that this likely sounds like common sense. Unfortunately, "building for scale" is something that is so heavily emphasized in post-secondary education, tech blogs, youtube tutorials, and by "thought leaders" that it seemed (to me, at least) like the only acceptable option. 

## What to worry about instead

Admittedly, I've foot-gunned so many projects trying to worry about performance or scalability before I even have a working prototype or a full set of specifications. There are better things to be worrying about like:

1. Properly document your solution's technical decisions, requirements, features, and deployment strategies. You'll thank yourself later, or someone else will.
2. Plan on how to scale up if you ever get to the point that it's needed, and design with it in mind (this could be vertical scaling, horizontal scaling, or further optimization in your software).  