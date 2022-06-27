---
title: 'Uses'
description: 'A living document of the gear and tech I use day-to-day.'
layout: ../layouts/MainLayout.astro
setup: |
  import PostEditCard from '../components/posts/PostEditCard.astro'
---

# Uses

A living document of the gear and tech I use day-to-day.

## What's Up With Uses?

It's a convenient way to list the gear you have, keep track of what you're using, and make it shareable with others, all in one place.

Check out everybody elses "/uses" page on [uses.tech](https://uses.tech/) as well

## Desk Setup

This is where the large majority of my day-to-day gear lives.

- **Desk**: old door strapped to some generic sit/stand legs.
- **Keyboard**: Ducky One 2 SF with Cherry MX Browns, a 65% format keyboard with RGB.
- **Mouse**: Logitech G502 gaming mouse, another RGB goodie.
- **Monitors**: some older Dell monitors I got for free from my last job. I'm not sure what the model is but they're 1080p and good enough!
- **Google Home Display**: I use the display as a photo display, and for smart home automation. 

### Desktop Computer

- **CPU**: Intel I7 10700K @ 3.8GHz.
- **CPU Cooler**: Corsair H60i AIO.
- **RAM**: 32 GB (4 x 8GB) Corsair Vengeance RAM @ 3600MHz.
- **GPU**: GTX 1660 Ti.
- **SSD**: 256 GB ADATA SATA III.
- **HDD**: 2TB Hard Drive (not sure of brand).
- **PSU**: Corsair CX750F RGB 750 Watt.
- **Case**: Corsair iCUE 5000X RGB Mid-Tower ATX.

## Servers & Hardware

I have an ever-growing homelab in my office as well. The lab has a few servers, but not much else. 

### NAS Server (a.k.a MoonTurtle)

My NAS is used for data storage and a bunch of dockerized applications (like NextCloud and some DataBases). 
It's mostly just a frankenstein of my first PC build from 2012, specs are:

- **CPU**: Intel I7 3770 @ 3.2GHz.
- **CPU Cooler**: Stock Intel cooler.
- **RAM**: 16GB of Kingston HyperX @ 1600MHz.
- **GPU**: Intel Integrated Graphics.
- **SSD**: 256 GB Samsung EVO Black: used as a cache drive.
- **HDD**: 2 x 4TB Seagate IronWolf NAS drives: one parity drive, total 4TB of storage.
- **PSU**: 500 watt XFX power supply.
- **UPS**: APC 850VA Battery Backup (backs up the router, switch, and NAS).
- **Operating System**: [unraid](https://unraid.net/) makes managing VMs, Docker Images, and VPN access to my house really easy.

### Raspberry Pi Cluster

I have 3 Raspberry Pi 4Bs w/ 8gb of RAM I use for a Micro K8s cluster. They're all setup with the exact same hardware:

- **Storage**: 64GB SD card
- **Case**: [Argon One](https://www.argon40.com/en-ca/products/argon-one-v2-case-for-raspberry-pi-4) case for Raspbery Pi.

## Misc

- **Oculus Quest 1**: doesn't get used much anymore. I used to be really into BeatSaber. 
- **Lots of books**: I have a huge stack of unread books on my desk that I'm slowly working through. 

<PostEditCard fileName='pages/uses.md' />
