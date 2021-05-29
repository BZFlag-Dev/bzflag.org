---
title: Contributing
docpath: contributing/
---

## Reporting Bugs/Issues

If you find a problem with the game you can report it to our development team. If you are unsure of the source of the problem, feel free to discuss the problem on our development/support IRC channel at <a href="https://web.libera.chat/#bzflag" rel="noopener" target="_blank">#bzflag on the irc.libera.chat network</a> or on our [public forums](https://forums.bzflag.org/). Otherwise, you can post the issue to our [BZFlag project issue tracker](https://github.com/BZFlag-Dev/bzflag/issues) on GitHub. There are also separate repositories and issue trackers for the other related projects such as our websites. You will find all our official projects at our [GitHub organization page](https://github.com/BZFlag-Dev/).

## Contributing Changes

With Git and GitHub, contributing to a project is reasonably easy, but we'll try to walk you through best practices. This will allow you to work on multiple independent changes at the same time, keeping them in separate "topic branches". The example below assumes you want to contribute to the **master** branch and creates a new topic branch called **feature/betterui** in your fork.

1. You will need to fork our GitHub repository the first time you want to contribute changes. You can use this same fork for later changes. Sign in to your GitHub account, go to our [GitHub repository](https://github.com/BZFlag-Dev/bzflag), and click the Fork button.
1. Now that you have a fork of our code, you need to clone it to your computer so you can work on it. Run:<br />`git clone https://github.com/Your_User_Name/bzflag`
1. You will be working from within the `bzflag` directory from now on. Run:<br />`cd bzflag`
1. In order to later merge changes from our official repository, add an upstream remote:<br />`git remote add upstream https://github.com/BZFlag-Dev/bzflag`
1. Next, check out the upstream branch you are intending to submit changes to.<br><code>git checkout **master**</code>
1. **Do not** work directly in the branches that the official repository has created (such as 2.4 or master). Instead, create your own topic branch that describes the change you are trying to make. For instance, if you were trying to add an improved user interface, your branch could be called **feature/betterui**. Create and checkout that new branch with:<br /><code>git checkout -b **feature/betterui**</code>
1. Now make changes to files and then <code>git add **FilesYouModified**</code> to stage the changes.
1. Once you have some changes staged, you can commit those changes to your local clone. An editor will appear where you can write a message that describes the changes you have made.<br /><code>git commit</code>
1. Once you have one or more commits applied to your branch, you can push these changes back up to your fork on GitHub.<br /><code>git push -u origin **feature/betterui**</code>
1. You can repeat the process of editing files, committing, and pushing until you are ready to submit your changes back to the official repository. For this, you would create a pull request (known as a PR) on GitHub. After creating a pull request, you can continue to push new changes to your branch and this will update the changes on the PR. GitHub provides a page that talks <a href="https://help.github.com/articles/about-pull-requests/" rel="nofollow">about pull requests</a>.

## Keeping your fork in sync

As new changes are pushed to the official BZFlag project repositories, your fork will become outdated.  The steps below will allow you to update your fork and bring in any new changes. The branches **master** and **feature/betterui** below are examples, with feature/betterui being a branch off of master. If you are working with another base branch, such as 2.4, or you want to update multiple branches in your fork, adjust as necessary.

1. Checkout the branch name matching the upstream branch you would like to update<br /><code>git checkout **master**</code>
1. Fetch upstream changes<br />`git fetch upstream`
1. Merge upstream changes into your fork<br /><code>git merge --ff-only upstream/**master**</code>
1. Push new changes to your fork<br /><code>git push origin **master**</code>
1. Checkout your branch you wish to merge changes into<br /><code>git checkout **feature/betterui**</code>
1. Rebase your branch against the branch it is based on<br /><code>git rebase **master**</code>
1. If there are any conflicts, you must resolve those.
1. Push the rebased branch<br /><code>git push --force origin **feature/betterui**</code>


## More Information

GitHub has some documentation and guides for forking GitHub repositories:
* <a href="https://help.github.com/articles/fork-a-repo/" rel="nofollow">Fork a repo</a>
* <a href="https://guides.github.com/activities/forking/" rel="nofollow">Forking projects</a>

There are various sites with tutorials and information about using Git:
* <a href="https://try.github.io/" rel="nofollow">Resources to learn Git (GitHub)</a>
* <a href="https://guides.github.com/" rel="nofollow">GitHub Guides</a>
* <a href="https://www.codecademy.com/learn/learn-git" rel="nofollow">Learn Git (Code Academy)</a>

There's also an online interactive site called <a href="https://learngitbranching.js.org/" rel="nofollow">Learn Git Branching</a>.
