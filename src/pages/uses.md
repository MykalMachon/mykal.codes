---
title: Uses
description: A living document of the gear and tech I use day-to-day.
layout: "../layouts/MainLayout.astro"
setup: 'import PostEditCard from ''../components/posts/PostEditCard.astro''

  '

---
# Uses

A living document of the gear and tech I use day-to-day.

## 🤔 What's Up With Uses?

It's a convenient way to list the gear you have, keep track of what you're using, and make it shareable with others, all in one place.

Check out everybody elses "/uses" page on [uses.tech](https://uses.tech/) as well

## 📚 Desk Setup

This is where the large majority of my day-to-day gear lives.

* **Desk**: old door strapped to some generic sit/stand legs.
* **Keyboards**:
  * [Ducky One 2 SF](https://www.duckychannel.com.tw/en/Ducky-One2-SF): 65% wired board with Cherry MX browns, RGB + a few artisan caps. Lives on my desk at home.
  * [Nuphy Air60](https://nuphy.com/products/air60) + [NuFolio](https://nuphy.com/collections/accessories/products/nufolio-v2-for-air60): a 60% wireless board, Gateron low-profile browns with a fancy carrying case. I use this on the go and at the office.
* **Mouse**: Logitech G502 gaming mouse
* **Monitors**: some older Dell monitors I got for free from my last job. I'm not sure what the model is but they're 1080p and good enough!
* **Google Home Display**: I use the display to show photos, and as a convenient way to use my smart home controls.

### 🖥 Desktop Computer

* **CPU**: Intel I7 10700K @ 3.8GHz.
* **CPU Cooler**: Corsair H60i AIO.
* **RAM**: 32 GB (4 x 8GB) Corsair Vengeance RAM @ 3600MHz.
* **GPU**: GTX 1660 Ti.
* **SSD**: 256 GB ADATA SATA III.
* **HDD**: 2TB Hard Drive (not sure of brand).
* **PSU**: Corsair CX750F RGB 750 watt.
* **Case**: Corsair iCUE 5000X RGB Mid-Tower ATX.

### 💻 Laptops

I somehow ended up with a stack of laptops over time.

* **2 x Dell Latitude 7440**: One from the current job, one from the previous job that I got to keep. They're both i7's, with 16GB of RAM, and 256GB of storage.

## 💾 Servers & Hardware

I have an ever-growing homelab in my office as well. The lab has a few servers, but not much else.

### 🐢 NAS Server (a.k.a MoonTurtle)

My NAS is used for data storage and a bunch of dockerized applications (like NextCloud, Trillium notes, some dev environments, and databases).
It's mostly just a frankenstein of my first PC build from 2012. The specs are:

* **CPU**: Intel I7 3770 @ 3.2GHz.
* **CPU Cooler**: Stock Intel cooler.
* **RAM**: 16GB of Kingston HyperX @ 1600MHz.
* **GPU**: Intel Integrated Graphics.
* **SSD**: 256 GB Samsung EVO Black: used as a cache drive.
* **HDD**: 2 x 4TB Seagate IronWolf NAS drives: one parity drive, total 4TB of storage.
* **PSU**: XFX 500 watt.
* **UPS**: APC 850VA Battery Backup (backs up the router, switch, and NAS).
* **Operating System**: [unraid](https://unraid.net/) makes managing VMs, Docker Images, and VPN access to my house really easy.

### 🍓 Raspberry Pi Cluster

I have 3 Raspberry Pi 4Bs w/ 8gb of RAM I use for a Micro K8s cluster. They're all setup with the exact same hardware:

* **Storage**: 64GB SD card
* **Case**: [Argon One](https://www.argon40.com/en-ca/products/argon-one-v2-case-for-raspberry-pi-4) case for Raspbery Pi.

## 🤘🏻 Misc

* **Sony WH-1000xm4**: Awesome wireless noise-cancelling headphones. I have the black ones 🎧
* **Lots of books**: I have a huge stack of unread books on my desk that I'm slowly working through.
* **Forestry.io:** a CMS that I use for this site. I've just recently set it up, and the text you're reading right now is the first content change I'm making in the CMS.

<PostEditCard fileName='pages/uses.md' />