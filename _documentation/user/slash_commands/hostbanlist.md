---
title: hostbanlist
syntax: "[filter]"
since: 2.4.0
category: Admin
permissions:
  - banlist
---

The hostbanlist command will list all active host bans. For each ban, it will list the IP that is banned, duration remaining (unless it is a permanent ban), reason, and the one who created the ban. As with the banlist command, the hostbanlist command allows adding a filter to search for specific entries.

Here is an example of the output:

```
[SERVER->] static-34-28.example.com (10058.6 minutes)  banned by: BobTheTank
[SERVER->]    reason: Profanity is not allowed.
```
