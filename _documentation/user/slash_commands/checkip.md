---
title: checkip
syntax: "<ip address>"
since: 2.4.0
category: Admin
permissions:
  - banlist
---

This command will check if an IP address is banned. This only checks IP bans, so even if it says that an IP is not banned, there still might be a host ban or an ID ban preventing a player from joining. Examples:

`/checkip 127.0.0.1`

```
[SERVER->] 127.0.0.1 is not banned.
```

`/checkip 192.168.4.3`

```
[SERVER->] 192.168.4.3 is banned:
[SERVER->] 192.168.4.3 (256.1 minutes) banned by: BobTheTank
[SERVER->]    reason: Please do not use profanity.
```
