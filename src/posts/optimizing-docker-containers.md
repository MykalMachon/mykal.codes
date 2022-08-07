---
title: Optimizing Docker Containers
slug: optimizing-docker-containers
description:
  "docker containers are relatively easy to get up and going, but can often
  be heavily optimized. "
pubDate: 2022-07-25T23:00:00Z
heroImage: https://res.cloudinary.com/mykalcodes/image/upload/v1656430048/Mykal%20Codes/better-docker-containers.webp
tags:
  - devops
  - docker
draft: true
---

As I've been building and shipping more and more docker images, I've realized that while it's easy to get up and going, it can require quite a bit of work to get a "good" docker container setup.

Things you can do for a better docker container can include:

- Create a docker image for production, and development
  - production image: slimmed down version of dev, don't volume mount unless necessary
  - dev image: full-fat version of dev that runs any development/live-reload services.
- Experiment with different base images
  - just, don't use the `:latest` tag in your base image, ever.
  - experiment with Debian alternatives like `alpine`, `buster`, and `slim`
- Limit access by running the app as a non-root user
- Multistage builds to save build time
- Use docker-compose as a default
  - run commands via the docker-compose config to save time.

## A starting point...

To make this a bit easier to discuss, we're going to start with a very basic dockerfile example that is good enough to get you up and going but has lots of room for improvement.

```
FROM ubuntu:latest

# install os dependencies
RUN apt-get update && apt-get install
RUN apt-get python3 python3-dev python3-pip

# mount application code
WORKDIR /app
COPY my-app my-app

# install app dependencies
RUN pip3 install -r requirements.txt

# run the application
EXPOSE 8080
CMD ["python3", "-m", "my-app:start_app()"]
```

okay, so what are the pain points with the approach above?

1. A re-build is required whenever code changes are made
2. Builds take \~3-5 minutes, docker's caching layers are working against us.
3. the image is pretty big (\~450MB)

### Experiment with different base images

information goes here

### Limit access by running the app as a non-root user

information goes here

### Multistage builds to save build time

information goes here

### Use docker-compose as a default

Instead of having to remember the long and sometimes complicated docker run commands you'd have to run in the terminal, you can just use a docker-compose.yml file to store your config.

This also makes it really easy to spin up "accompanying" containers for dev/testing (e.g. a PostgreSQL DB, Redis Cache, etc.)

### Containers for production and development

This is mostly a developer experience improvement, but it can actually improve your deploy experience, especially if you heavily use volumes for development.
