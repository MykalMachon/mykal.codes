---
pubDate: 2024-12-07
title: Debugging short lived containers
description: Use this little trick to debug your containerized jobs
type: post
draft: true
tags:
  - devops
  - docker
---
I work with docker containers pretty much every day. There have been countless times where I've been writing a `dockerfile` for a scheduled job/process, or a web app that is crashing immediately on startup. It's a frustrating place to be.&#x20;

## The problem

If your container is long running, debugging containers that are having health problems like this is relatively easy! You can just open a shell in the container to peek around and see what's happening like you would on your host machine:&#x20;

```bash
docker compose exec -it /bin/sh my-job
```

The problem is, you can't do that on a container that is short running or failing to come up at all. The container isn't up, so you can't run anything inside of it. Try it, and you'll get this message.&#x20;

```bash
service "my-job" is not up
```

## My solution

I had a bit of a brain blast the other day and found a way to get around this. The trick is to replace the startup command for the container with the `sleep` command.

```yml
services:
  my-job: 
    container: my-container:local
    command: sleep infinity; # this line will replace the startup command
```

Instead of starting as per the `entrypoint` or `command` that is set in your `dockerfile` your container's main TTY will go into sleep for an infinite amount of time. Usually you'd never want to do this, but this will effectively keep your container online and "healthy" until you take it down yourself.&#x20;

Then you can just startup your container, and open a shell!&#x20;

```bash
docker compose up my-job 
docker compose exec -it /bin/sh my-job
```
