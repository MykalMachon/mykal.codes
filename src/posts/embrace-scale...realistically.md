---
title: Scale is a requirement
slug: scale-is-a-requirement
description: Only provide the scale that your users need. The rest is likely waste.
pubDate: 2022-08-08T07:00:00Z
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1656711520/Mykal%20Codes/database-to-api.jpg
tags:
- devops
draft: true

---
After just over a year in my first "real" tech job, at a large company (1500+ employees) with hundreds of deployed applications, services, and systems I've slowly come to the realization that building for scale is overrated, _most of the time_.

I'm not saying that we should half-ass our solutions, or stop caring about performance. _The quality of a solution is important_. What I mean to say is that _the performance of a solution at scale, and the work that's put in to achieve that, should be proportionate to the scale you actually need._ 

## Scale is a requirement

Scale is a requirement like any other requirement. Not every project needs to be scaled up to infinity, and some projects simply don't make sense at a small scale. Logically then, when planning a project we should be setting an expected scale for the project. 

I know that this likely _sounds_ like common sense. Unfortunately, "building for scale" is something that is so heavily emphasized in post-secondary education, tech blogs, youtube tutorials, and by "thought leaders" that it seemed (to me, at least) like the only acceptable option. 

This belief seems to have permeated into how the software industry plans as well. This usually leads to scalability being a forgone conclusion: "Why would we build anything that doesn't scale?". Which in reality is not too different from asking why you wouldn't build a Snapchat integration into a reporting system. if it doesn't make sense, we shouldn't build it in.  

To provide an opposite example, we don't need to worry about scale in an app used by 10-20 people per day and hosted on an internal network. It simply isn't something we, or the users, need to be successful.

## Scaling is for some of us

If you're working at Facebook, Apple, Netflix, Google, or any of the other handful of companies that server petabytes of data per minute to hundreds of millions of people each day, _scale matters a lot to you._ 

Thankfully, [that's not most of us](https://blog.hubspot.com/blog/tabid/6307/bid/5092/how-many-visitors-should-your-site-get.aspx). Most websites and web applications for example receive between 

## What should come before scale

Admittedly, I've foot-gunned so many projects trying to worry about scalability before I even have a full set of specifications, or a functional prototype. Worrying about load balancers, container orchestration, and other scaling strategies should probably not be the first priority unless your facebook, as discussed above. 

There are better things to focus on in my opinion:

1. Write high-quality code, that is well documented via comments. Focus on building a well-documented and logically structured solution that _could_ be made scaleable later. 
2. Test the application to a point where you're confident in its ability to model real use-cases. [Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests) - Guillermo Rauch.
3. Properly document your solution's technical decisions, requirements, features, and deployment strategies. You'll thank yourself later, or someone else will.
4. Implement monitoring via observability and error monitoring tools. This way you can know how well your solution scales, and make educated decisions from there. 
5. Plan how you would scale if you ever end up needing to. This doesn't apply to systems that won't ever need to scale. 

I know that's a relatively long list, but it's basically become my pre-launch checklist for any app I build at this point. 