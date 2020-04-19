---
title: Set default upstream for git repo
date: '2020-04-19'
spoiler: Setting the default upstream for a git repository.
tags: 'git'
---

Setting the default upstream for a git repo is simple. Git has a `--set-upstream` (`-u` for short) flag that allows us to set where git will push by default.

The syntax for this is as follows.

```sh
git push -u <remote_name> <local_branch_name>:<corresponding_remote_branch_name>
```

```sh
# Example
git push -u origin master:master
```

We can shorten this if the remote's branch name is the same as what it is locally.

```sh
git push -u <remote_name> <local_branch_name>
```

```sh
# Example
git push -u origin master
```

