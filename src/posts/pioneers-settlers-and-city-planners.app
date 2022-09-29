---
title: Pioneers, Settlers, and City planners
slug: pioneers-settlers-and-city-planners
description: some notes on archetypes and exceling at work.
pubDate: 2022-09-02T04:45:00Z
heroImage: ''
tags:
- devops
draft: false

---
I was watching one of [Theo Browne](https://twitter.com/t3dotgg)'s live streams with [Jason Lengstorf](https://twitter.com/jlengstorf) today and they got around to talking about the archetypes of people who excel in certain roles ([here's a link to that part of the stream](https://youtu.be/nwAr5bFOi1s?t=4489)). 

Jason brought up this concept of "Pioneers, Settlers, and City planners" that I really identified with: 

* **Pioneers:** great at lateral thinking. Map biz needs into technical solutions and break ground on solutions. Find it hard to stick on projects long-term, like to move around a lot in their day-to-day. 
* **Settlers:** great at taking prototypes or partly working solutions and getting them "90% of the way there" through a mix of best practice, polish, and design. Excel with clear goals. Can often do a bit of pioneering or city planning themselves as well. 
* **City Planners:** great at maintaining strongly established systems, polishing up that "last 10%", and making them scale-able. Very deep understanding of the tech required to optimize and automate. 

After doing some googling, it seems like [Simon Wardley actually coined the phrase](https://interaction.net.au/articles/pioneers-settlers-town-planners-how-innovation-works/#:\~:text=Researcher%20Simon%20Wardley%20derived%20the,into%20cell%2Dbased%20organizational%20structures.) (Jason brought this up, I just missed it in my notes). After reading through the article I liked above (and being a little weirded out by the colonialist "manifest destiny" of it all), I do really like how this abstraction maps to complex problem solving in development.

I think I'm a bit of a pioneer at heart (i.e. my freelancing work was mostly greenfield, and countless sort-of-working prototypes on GitHub). In reality I excel at levelling up existing, but non-optimal solutions which in what would be considered the settler role. The city planner role is something I've always struggled with in practice. I've very rarely had the patience to sit and optimize solutions that are _mostly_ there (the few exceptions being where it was either required for scale, or user experience).  

In retrospect, I learned a lot of my web development skills through very settler behavior. At my first office job, we had an excel sheet that was used for tracking sales, commission, and other business-y stuff; a tale as old as time. This was before cloud solutions were a given for most businesses as well, so it sat on a shared local drive and inherited all the lovely overwriting issues that come with that as well. It was a headache, but the business needed it.  

After convincing my boss to take a crack at cleaning it up, I ended up migrating the data into firebase and building a hacked-together web app where users could go in and edit the data, view the reports, and download little pieces of the data as a CSV. This is peak settler behavior. I took a hacked together prototype (excel sheet on company hard drive) and made it 90% of the way to optimal (vanilla JS web app with Firebase).     