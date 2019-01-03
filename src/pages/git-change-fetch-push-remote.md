---
title: Change fetch/push URL for git remote
date: '2019-01-02'
spoiler: Changing the fetch/push URL for a single git remote.
---

The typical git workflow at my employeer is to create branches off of the upstream remote's `master` branch, push those branches into your respective origin, and then create Pull Requests to the upstream's `master` branch.

Keeping `master` updated with upstream in your local copy is fairly simple.

```bash
> git pull --rebase upstream master
```

However, there is an even easier way that I've found works well for this workflow. Since this workflow rarely, if ever, needs to pull down what the origin's `master` branch has, it would be simplier to be able to type `git pull --rebase`.

To do this, we need to update the fetch URL that git uses for the repo.

```bash
> git remote set-url origin --fetch /path/to/upstream.git
```

**Voila!** We can now run `git pull --rebase` and git will look to the upstream by default when pulling down changes.

Likewise, the push URL can be changed in almost the same fashion.

```bash
> git remote set-url origin --push /new/path.git
```

_Note: This also comes in very handy if you're transitioning a repo to a new remote since it lets you pull down the changes from one remote and push the changes to different one._
