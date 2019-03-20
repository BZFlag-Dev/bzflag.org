---
title: showperms
syntax: "[callsign]"
since: 2.4.0
category: Player
permissions:
  - showOthers
---

This command lists the current permissions assigned to the user. It optionally allows a callsign to be specified after it to show the permissions for another player if the user has the SHOWOTHERS permission, which is generally reserved for admins. Here is an example of the output:

```
[SERVER->] Permissions for: BobTheTank
[SERVER->] actionMessage
[SERVER->] adminMessageReceive
[SERVER->] adminMessageSend
[SERVER->] antiban
[SERVER->] antideregister
[SERVER->] antikick
[SERVER->] antikill
[SERVER->] antipoll
[SERVER->] antipollban
...
```
