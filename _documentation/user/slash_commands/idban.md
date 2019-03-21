---
title: idban
syntax: "<slot# | callsign | +bzid> <duration> <reason>"
since: 2.4.0
category: Admin
permissions:
  - ban
  - shortBan
---

This command is not used as often. When a registered player is IP banned by callsign or slot number, it adds a corresponding ID ban as well. Also, an ID ban only blocks a single account, so a user can either switch to a different account, or just use an unregistered name. ID bans are more useful on servers that require a registered account to spawn or talk.

Here's an example:

```
/idban SomePlayer 2w Repeated teamkilling after several warnings.
```

It is also possible to ban a BZID after the user has already left, either obtained from /idlist while they were on or the server log files. So in the case of SomePlayer, their BZID is 179. Including a plus (+) sign before the number indicates it is specifying a BZID instead of a callsign.

```
/idban +179 2w Repeated teamkilling after server warnings.
```

