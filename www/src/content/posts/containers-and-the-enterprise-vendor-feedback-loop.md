---
title: Containers & The Enterprise-Vendor Feedback Loop
type: 'post'
description: Enterprise and enterprise-vendor's both improve at a glacial pace; why?
pubDate: 2023-03-07
draft: true
tags:
  - docker
  - enterprise
---

I love containers. I think they're cool. They enable automated deploys, self-repairing systems, and give us a direct programmatic "source of truth" interface for our infrastructure. All of which can be _huge_ in an organization with a significant number of server-based applications, jobs, daemons, and systems.

Despite all of those benefits, I've noticed there seems to be a bit of a feedback loop that prevents containers from reaching wide-spread adoption at work and in enterprise infrastructure. I've been calling this the "enterprise-vendor feedback loop" in my head. Here's an example of what I mean:

- Enterprise wants to move forward with container technology (Docker, K8s, etc.)
- Niche enterprise vendors don't offer a solution compatible with container technology
- Enterprise is not able to get enough buy in to move forward in a meaningful way.
- Enterprises technological growth stagnates.

Now imagine the same thing from the vendor's perspective

- Team within vendor co wants to better their offering by adding containers as a build target.
- Clients are not "ready" for containers because most other vendors aren't offering it
- Vendor doesn't have enough buy-in from customers to move forward with containers.
- Vendor's technological growth stagnates.

This feedback loop seems to keep both enterprise companies and enterprise vendors in a glacial state of continuous improvement. Neither organization will make a substantial change in underlying technology until there is an absolute need for the change because the challenge of moving forward without vendor buy-in is often above either organization's pain threshold for change.

## Why not just containerize vendor applications?

I've thought about this quite a bit as well. In theory an org could containerize vendor applications as they're onboarded. Just write up a Docker file or a Docker compose file for each new application during the onboarding process!

While that might be fine initially, there are some maintenance risks in doing so:

- The vendor may no longer support the application with a custom container layer on-top. Some vendors just don't support any customizations, and by putting that layer on top of the whole app you've potentially put the whole app out-of-support.
- Windows server apps often have issues when containerized from what I've seen. Especially so when a custom GUI is involved for setup and configuration tasks in the software.
- Upgrades become significantly more complicated if the vendors application is heavily refactored and the vendor is not comfortable with containers.

## Not just containers, unfortunately

This applies to more than just containerization technology though. That feedback loop can prevent a number of advances in a large enterprise organization. Here are some other examples I've seen:

- Desktop virtualization
- CI/CD pipelines
- non-conventional environments (server-less, cloud, hybrid)

## Anyone have any ideas?

Maybe I'm missing an obvious solution here, but would be open to any ideas you have around how we can get out of this continuous improvement rut. It may just be that things are moving slower than I'd like and that's the way of the world...
