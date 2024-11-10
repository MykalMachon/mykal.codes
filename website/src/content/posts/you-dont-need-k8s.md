---
pubDate: 2024-11-10
title: You don't need k8s
description: You can probably get by with better design.
type: post
draft: true
tags:
  - devops
  - sustainability
---
Kubernetes is cool, and I know that it's cool to be able to say you have 8 nodes running via AKS, but let's be honest, you could probably run your app on an raspberry pi 5 just fine.&#x20;

If you're working at a high growth startup, okay! Sure! you probably need some sort of auto-scaling and auto-recovery built into your stack. K8s might make sense for you. For most of us, it probably doesn't.

## Realistic expectations

* You can run a website that serves millions of page views a day on a 8 year old Windows server with 4 CPU cores and 8GB of RAM with lots of breathing room.
* The large majority of us aren't serving that many users- even if you are, if you're optimizing properly, it's likely you don't need any insane scaling to handle your workloads.&#x20;
*

## Building smart

To clarify, I realize that running your production services on a raspberry pi is a good idea. It's probably not! but you could probably save a whole lot of headache and money by getting just a bit closer to the metal and understanding where you bottlenecks are.

* Build your apps with Docker: it does add some overhead but all things considered it's not a lot, and it opens you up to being able to move to k8s or something similar very easily if needed.&#x20;
* Learn basic Linux Sysadmin: understanding basic Linux commands and sysadmin stuff has been super useful for me personally and I think it opens up a lot of opportunities to understand your bottlenecks.&#x20;



I need to keep working on this, but as I commit this draft to my GitHub repo, it is 1:03am on 2024-11-10, and I am tired. I will come back here and keep working soon.&#x20;
