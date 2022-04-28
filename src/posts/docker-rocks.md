---
title: "Docker Rocks 🐳"
slug: 'docker-rocks'
description: "Once Docker and Docker-compose clicks, it makes dev ➡️ launch so much easier"
date: "Thursday, April 27 2022"
heroImage: "https://images.unsplash.com/photo-1583686298564-46fbffda0707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
---

Docker is such an amazing piece of technology.

I’ve been doing a bunch with it at work lately and once things “click” (docker + docker-compose) the pipeline from development, to deployment can feel seamless, and a lot easier to be confident in.

You can have a local "dev" environment (DB, App, Redis, etc) that mirrors your production environment up and running with one command. 
you can make all your changes, and test them in an environment that is extremely close to production, in *one command*.

From there, all you need to deploy is commit your code, merge a pull request, pull things down on your production server, and restart!  

> If you're in a cloud environment that supports git-based CI/CD, this is probably automated for you already! 🎉

We've even started to "containerize" off-the-shelf apps to simplify deployment. Docker-compose is so useful for composing services that it can take deployments down from multi-hour efforts to a few commands. It can literally be as simple as:

```
docker-compose build && docker-compose up
```

The next logical step for me in all of this is Kubernetes, which seems infinitely more daunting somehow. 

### Wanna Talk About This?

Contact me on [twitter](https://twitter.com/mykalmachon), or [on this site](https://mykal.codes/contact/)