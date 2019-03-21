---
title: unban
syntax: "<ip address>"
since: 2.4.0
category: Admin
permissions:
  - unban
---

The unban command can remove IP bans. The `/banlist` command will show the exact address or range that was banned. The unban command must be passed the exact IP or range that was banned. Example:

`/unban 192.168.4.3`

Or to unban a range:

`/unban 172.16.0.0/26`
