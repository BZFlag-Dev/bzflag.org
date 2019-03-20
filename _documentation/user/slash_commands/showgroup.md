---
title: showgroup
syntax: "[callsign]"
since: 2.4.0
category: Player
permissions:
  - showOthers
---

This command lists the current groups assigned to the player. It optionally allows a callsign to be specified after it to show the permissions for another player if the user has the SHOWOTHERS permission, which is generally reserved for admins. Here is an example of the output:

```
[SERVER->] Global Groups (only extras) for BobTheTank: EVERYONE VERIFIED SOMESERVER.ADMIN
[SERVER->] Local groups for ZAPPER!: EVERYONE VERIFIED
```
