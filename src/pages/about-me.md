---
title: About Me
description: Here's a quick summary of who I am.
layout: "../layouts/MainLayout.astro"
setup: |
  import AboutSlider from '../components/about/AboutSlider.astro';
  import CongratsButton from '../components/about/CongratsButton';

---
# About Me

Here's a quick summary of who I am.

<AboutSlider />

## Professional

I write software, documentation and help people solve problems with computers. I'm a bit addicted to learning and tend to get bored if not challenged. This has led me down quite a few paths ranging from [web-dev at an e-commerce company](https://www.vsslgear.com/en-ca), [freelancing for small businesses during the pandemic](https://tinybox.dev) and [my current gig as a Systems Analyst at my alma mater, UFV](https://mykal.codes/posts/new-job-at-ufv/).  

I've been programming pretty much non-stop since I learned about [scripting in GameMaker 8](https://manual.yoyogames.com/The_Asset_Editors/Scripts.htm) at 13 years old (2012). Professionally, I've had at least one programming job consistently since 2016. Given I've been at it for so long, I've dabbled in a bunch of technologies and spaces, but am most up-to-date with the following tech: 

* 🖋️Languages and runtimes
  * HTML / CSS / JS: the good old web primitives. I prefer SCSS over CSS though.
  * Typescript: after some initial hesitancy, I don't think I could go back to writing js without types.
  * Node.js: I've experimented with Deno, but most of my server js experience is in nodeland.  
  * Python: I love the simplicity and beauty of python code. It's just so fun to write.
  * Go: I'm still a gopher-in-training but have loved what I've seen of so far. Especially the performance 🚀
* 🔨Tools and libraries
  * React & Next.js: I work with React and Next.js heavily, they're a great combo. 
  * Flask: the most flexible way to write HTTP APIs and web apps with Python.
  * Docker: aided by compose It makes deploys and dependency management so easy.
  * Prisma: my go-to ORM for node.js-based projects.
  * SQLAlchemy: my go-to ORM for python-based projects.
  * Redis: caching, rate limiting, and even some persistence storage lately. 

For more professional credentials or just to talk about what I'm interested in for work, [feel free to reach out](https://mykal.codes/contact).

## Personal

I like spending time with friends, and family (including my 2 cats), and doing generally nerdy things including:

* 🎮 Playing Video Games
* 📚 Reading Sci-Fi, Horror, [and more](https://www.goodreads.com/user/show/141327631-mykal-machon)
* 👩🏻‍💻 Building fun side projects (webapps, writing, etc.)
* 🍻 Spending time with family and friends
* ☕ Making coffee

To see the gear and technologies I use on a regular basis, checkout [my uses pages](/uses/)

## Education

I graduated from the University of the Fraser Valley (UFV) with a Bachelor in Computer Information Systems in December of 2021.

<CongratsButton client:idle>Press to say congrats 🎉</CongratsButton>

[UFV's BCIS degree](https://www.ufv.ca/computing/) is essentially a mix of a traditional Computer Science Degree,
with a number of other technical fields (Networking, IT, and Project Management) with a focus on projects and
practical work experience.

I also did some AI research work while I was a student at UFV relating to analyzing the [Teams Corpus](https://sites.google.com/site/teamentrainmentstudy/corpus?authuser=0)