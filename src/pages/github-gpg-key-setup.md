---
title: Setup GPG for git and GitHub on macOS
date: '2020-05-22'
spoiler: Setup GPG on macOS and sign commits with GPG key for verified commits in GitHub
tags: 'git,shell,github,macos'
---

**Note:** We'll be using [homebrew](https://brew.sh/) for installing things to make it a bit easier.

## Install GPG and related packages

First, we need to install GPG and related tools.

```bash
brew install gpg2
```

Install [GPG Suite](https://gpgtools.org/) to more easily manage the keys. This will also work with macOS' built in keychain so you won't need to enter your passphrase on every commit.

## Create a GPG key

GitHub has a great guide on how to create a new GPG key. You can find and follow that [here](https://help.github.com/en/github/authenticating-to-github/generating-a-new-gpg-key).

You can skip the first step of the guide which has you install the GPG command line tools. We handled this in the step above.

## Add GPG key to GitHub

Continuing with GitHub's guides, follow [this guide on adding a GPG key](https://help.github.com/en/github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account) to your account.

## Tell git about your new key

https://help.github.com/en/github/authenticating-to-github/telling-git-about-your-signing-key

I skipped step 5 in this guide since I'm using GPG Suite

## Shell Setup

Set the `GPG_TTY` variable using `export GPG_TTY=$(tty)` so that your shell knows about it in your appropriate config file.
- bash&nbsp;→ `~/.bashrc`
- zsh&nbsp;&nbsp;&nbsp;→ `~/.zshrc`
- fish&nbsp;&nbsp;&nbsp;→ `~/.config/fish/config.fish`
