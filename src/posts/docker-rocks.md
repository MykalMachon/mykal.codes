---
title: "Docker Rocks 🐳"
slug: 'docker-rocks'
description: "Once Docker and Docker-compose clicks, it makes dev -> launch so much easier"
date: "Thursday, April 27 2022"
heroImage: "https://images.unsplash.com/photo-1583686298564-46fbffda0707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
---

Docker is such a cool piece of technology.

I've been doing a bunch with it at work lately and once things "click" (docker + docker-compose) it makes the pipeline from development, to deployment seamless, and a lot easier to be confident in.

You can have a full "dev" environment (DB, App, Redis, etc) that mirrors your production environment up and running with one command. 
Once you've got that up, you can make all your changes, test them, commit the changes, pull them down on your server, restart, and you're done!

> If you're in a cloud environment that supports git-based CI/CD, this is probably automated for you already.

We've even started to "containerize" off-the-shelf apps to simplify deployment. Docker-compose is so useful for composing services that it can take deployments down from multi-hour efforts to a few commands. It can literally be as simple as:

```
docker-compose build && docker-compose up
```

Kubernetes is the next step for me in all of this I think, excited to see what that looks like too.

---

Anyways, nerd rant over. Go mess with Docker if you're interested in any of this stuff! super fun to mess around with.

### Wanna Talk About This?

Send me an email with the form below and I'll probably get back to you!