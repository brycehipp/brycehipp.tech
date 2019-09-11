---
title: Open files with merge conflicts in VS Code
date: '2019-09-11'
spoiler: One line command to open all files with merge conflicts in VS Code.
---

`git diff --name-only | uniq | xargs code`
