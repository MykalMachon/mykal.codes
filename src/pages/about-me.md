---
title: About me
description: Here's a quick summary of who I am.
layout: '../layouts/MainLayout.astro'
setup: |
  import AboutSlider from '../components/about/AboutSlider.astro';
  import CongratsButton from '../components/about/CongratsButton';
  import Details from '../components/Details.astro';
---

# About me

Here's a quick summary of who I am.

<AboutSlider />

## Professional

I write software, documentation and help people solve problems with computers. I've been programming pretty much non-stop since I learned about [scripting in GameMaker 8](https://manual.yoyogames.com/The_Asset_Editors/Scripts.htm) as a middle-schooler in 2013. I'm openly addicted to learning and tend to get bored if not challenged or allowed to grow.

These traits have resulted in me taking a wide range of technical jobs ranging from [general IT for a small investment firm](https://aprario.com) in 2017, [web-dev at an e-commerce startup](https://www.vsslgear.com/en-ca) in 2020, [e-commerce freelancing for startups](https://tinybox.dev) in 2020 and [my current gig as a Systems Analyst at my alma mater, UFV](https://mykal.codes/posts/new-job-at-ufv/) in 2021.

I've dabbled in a bunch of languages, tools, and services but I'm most up-to-date with the following:

<Details summary="🖋️ Languages and runtimes">
- **HTML / CSS / JS**: good old web primitives.
- **Typescript**: can't get much better than JS with types.
- **Node.js**: for web servers, job runners, desktop apps, scripts, etc.
- **Python**: I love the simplicity and beauty of Python code. It's just so fun to write.
- **Go**: I'm still a gopher-in-training but have loved what I've seen of so far; Especially the performance.
</Details>

<Details summary="🔨 Tools and libraries">
- **React & Next.js**: my favourite way to build fullstack applications.
- **Flask**: the most flexible way to write web stuff with Python.
- **Docker**: makes deps management, development, and deploys trivial.
- **Prisma**: my go-to ORM for node.js-based projects.
- **SQLAlchemy**: my go-to ORM for python-based projects.
</Details>

<Details summary="☁️ Hosting and DevOps">
- **Railway**: for hosting full-fat applications, and databases in the cloud. 
- **GitHub**: the defacto hosted version control and CI/CD pipeline.
- **Netlify**: for hosting static websites and web apps in the cloud.
- **Azure**: I have my AZ-900 and am working on my AZ-204 cert currently.
</Details>

I do my best work when my job is compatible with my professional values:

<Details summary="💖 Professional values">
- **Always be learning**: I work best when I'm learning and being challenged both by myself and my peers. Stagnation at work never feels good.
- **Enjoy your work**: Work is a big part of my life and it would be a waste to not have fun along the way.
- **Don't just fix, improve**: I aim to fix issues and solve root problems. Even better if I can do both at once. 
- **Work with good people**: I subscribe to the (cliche) idea of never being the smartest person in a room.
- **Autonomy**: I think good people work best when trusted and given authority in their domain.
</Details>

For more career info, an actual resume, or just to talk about what I'm interested in for work, [feel free to reach out](https://mykal.codes/contact).

## Personal

I like spending time with friends, and family (including my 2 cats), and doing generally nerdy things including:

- 🎮 Playing Video Games
- 📚 Reading Sci-Fi, Horror, [and more](https://www.goodreads.com/user/show/141327631-mykal-machon)
- 👩🏻‍💻 Building fun side projects (web apps, writing, etc.)
- 🍻 Spending time with family and friends
- ☕ Making coffee

To see the gear and technologies I use on a regular basis, check out [my uses pages](/uses/)

## Education

I graduated from the University of the Fraser Valley (UFV) with a Bachelor in Computer Information Systems in December of 2021.

<CongratsButton client:idle>Press to say congrats 🎉</CongratsButton>

[UFV's BCIS degree](https://www.ufv.ca/computing/) is essentially a mix of a traditional Computer Science Degree,
with a number of other technical fields (Networking, IT, and Project Management) with a focus on projects and
practical work experience.

I also did some AI research as a research assistant while studying at UFV. My research was centred around analyzing the [Teams Corpus](https://sites.google.com/site/teamentrainmentstudy/corpus?authuser=0) to predict group outcomes and building web-based corpora review and annotation software with React, Next.js, and Python via WASM.
