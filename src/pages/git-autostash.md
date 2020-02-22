---
title: Automatically stash changes before pull
date: '2020-01-26'
spoiler: Automatically stash your changes during a git pull with autostash.
tags: 'git'
---

I'll want to update my feature branch with changes that other contributors have made to the same branch. When I'm in the middle of a feature and don't want to commit yet, I'll stash my changes, pull from the remote (with --rebase), and the reapply my stash.

```shell
git stash
git pull --rebase
git stash pop
```

I was doing this regularly until I stumbled upon an option for `git pull` - `autostash`. With that option, we can trim the process down to one line.

```shell
git pull --rebase --autostash
```

I went ahead and mapped this to an alias in zsh to make it easier to remember.

```shell
alias gup="git pull --rebase --autostash"
```
