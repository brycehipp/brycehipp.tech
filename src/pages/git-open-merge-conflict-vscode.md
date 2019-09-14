---
title: Open files with merge conflicts in VS Code
date: '2019-09-11'
spoiler: One line command to open all files with merge conflicts in VS Code.
---

Conflicts in git will happen. In some cases, they are unavoidable.

Here is a one line command that can be ran at the root of the repository that will open all files with merge conflicts in VS Code.

`git diff --name-only | uniq | xargs code`

This command is does 3 things. It gets a list of file names (using `--name-only`) that have conflicts, pipes to `uniq` to get a unique list, and then proves them as arguments to VS Code to open via `xargs`.

I've aliased this to `git.fix` for ease of use during those pesky conflict resolutions.
