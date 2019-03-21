---
title: playerlist
syntax: ~
since: 2.4.0
category: Admin
permissions:
  - playerList
---

The playerlist command will provide the slot number, callsign, IP address, and hostname of every user on the server. This information can then be used for bans. Here is an example of the output:

```
[SERVER->] [0]SomePlayer : 192.168.4.3 (look.at.my.fancy.host.name) udp+
[SERVER->] [1]BobTheTank : 10.49.34.53 (somehost.somedomain.org) udp+
```

So, in the second line of text above, 1 is the slot number, "BobTheTank" is the player's name, 10.49.34.53 is the IP address, and somehost.somedomain.org is the hostname. At the end, there should also be a "udp+" shown. This means that the player has a UDP connection established in both directions.

**NOTE:** Although it is possible to use the slot number to issue kicks and bans, this is not recommended as it is too easy to kick/ban the wrong person. It is easy to mistype, or the target may leave and someone else may join into the same slot while the ban/kick command is being typed.
