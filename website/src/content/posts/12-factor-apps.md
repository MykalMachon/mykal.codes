---
title: 'The Twelve-Factor App'
type: 'link'
pubDate: 2024-08-09
draft: false
url: https://12factor.net/
tags: ['devops']
---

I came across this site while doing a workshop on kubernetes a few months back. Much like "[The Grug Brained Developer](https://grugbrain.dev/)", I keep coming back to it every few weeks for a once over. The site has also been really useful in code-review as a solid set of principles.

I'm a bit late to the party given that the site says it was last updated in 2017. The tools and services it suggests are a bit outdated for modern cloud hosts, and even most on-prem setups. Many of the concepts described on the site are also arguably tablestakes for a software developer in 2024. *[I know that my source code should all be tracked in git](https://12factor.net/codebase), duh!* or *yes, [I should have explicitly declared dependencies in a manifest](https://12factor.net/dependencies)...*

Despite the obvious points, The content’s age and simplicity highlight the enduring value of these as foundational development principles. 

## Some good nuggets to get you started

Backing services should always be implemented at a protocol level to avoid vendor lock-in and reduce coupling services in general. For example, you shouldn't have to rewrite model/service code because you're moving from upstash to a self-hosted Redis instance on k8s. Just use the protocol!

> The code for a twelve-factor app makes no distinction between local and third party services. To the app, both are attached resources, accessed via a URL or other locator/credentials stored in the config [...] Likewise, a local SMTP server could be swapped with a third-party SMTP service (such as Postmark) without code changes. In both cases, only the resource handle in the config needs to change.
> - [The Twelve-Factor App - Backing Services](https://12factor.net/backing-services)

A little tidbit on using environment variables for config over hardcoded or even purpose-built config file formats. While I don't always agree with this, I do think it's a good default. For example, sometimes a remote secret store like Azure Key Vault is a better choice for centralized rotating secrets. 

> The twelve-factor app stores config in environment variables (often shortened to env vars or env). Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard.
> - [The Twelve-Factor App - Config](https://12factor.net/config)

A point on good applications being stateless and executed as one or more process as quickly as possible. This design ethos makes your applications fault tolerant and in many cases horizontally and vertically scalable by default.

> Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.
> 
> The memory space or filesystem of the process can be used as a brief, single-transaction cache. For example, downloading a large file, operating on it, and storing the results of the operation in the database. The twelve-factor app never assumes that anything cached in memory or on disk will be available on a future request or job
> 
> [...]
> 
> Even when running only one process, a restart [...] will usually wipe out all local (e.g., memory and filesystem) state.
> - [The Twelve-Factor App - Processes](https://12factor.net/processes)