---
title: hostunban
syntax: "<hostname>"
since: 2.4.0
category: Admin
permissions:
  - unban
---

The hostunban command can remove host bans. The `/hostbanlist` command will show the exact hostname (wildcard or otherwise) that was banned. The hostunban command must be passed the exact hostname that was banned. Example:

```
/hostunban *.example.org
```
