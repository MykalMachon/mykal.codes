---
pubDate: 2025-03-02
title: 'Cool Tools: CLI Edition'
description: cool-tools-cli-edition
type: post
draft: true
tags:
  - cli
  - devops
---
I've noticed I'm spending more and more time with only a terminal open lately, with that, I've found quite a few handy little CLI apps, utilities, and even built setup a pretty shell theme.&#x20;

## What my setup looks like

![](@assets/posts/cli-apps-that-make-my-life-easier/image.png)

I use [zsh](https://www.zsh.org/) as my primary shell with [oh-my-zsh](https://ohmyz.sh/) and a [powerlevel10k](https://github.com/romkatv/powerlevel10k/tree/master) theme with the [Meslo NerdFont](https://github.com/romkatv/powerlevel10k/blob/master/font.md) to add all the fancy icons and ligatures into my command line. I've also been messing around with plugins in zsh but am still pretty new to how that works. All I've really tried is [the zsh autcomplete plugin](https://github.com/marlonrichert/zsh-autocomplete?tab=readme-ov-file#configuration) which has been a nice to have.

Admittedly, I don't do a whole lot with zsh that you couldn't do with bash, I just prefer the plugin ecosystem and themes available there over baseline bash.&#x20;

## Some tools I've been using

* [EZA](https://github.com/eza-community/eza): This is like an updated version of \`ls\` that can do some pretty cool stuff like listing information about folders containing git repos, listing human readable file sizes by default, and rendering out file trees.&#x20;
  * I have this alised to \`ls\` so I don't have to fight muscle memory at all.&#x20;
* [LazyGit](https://github.com/jesseduffield/lazygit): I've only been using lazygit for a few weeks but I am already a huge fan. It provides a really solid view into your repo status, history, and staged files. On top of that, it makes things like rebasing easy as well and guides you through the process.&#x20;
  * My favourite and most used feature for lazygit is using it to open new pull requests. You can simply open a repo, and hit \`o\`. that will open a new PR from the currently checked out branch to main. So easy.&#x20;
* [Superfile](https://superfile.netlify.app/getting-started/tutorial/): this is basically windows explorer, but good, in your terminal. Superfile is fantastic at viewing file details, traversing in and out of folders when looking for something, sorting files by edit time or name, and copy/cut/delete-ing multiple files at once.&#x20;
