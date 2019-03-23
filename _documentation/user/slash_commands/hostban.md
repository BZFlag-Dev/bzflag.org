---
command: hostban
syntax: "<hostname> <duration> <reason>"
since: 2.4.0
category: Admin
permissions:
  - ban
  - shortBan
---

The hostban command is used to ban players by their hostname. Most players will have a hostname, which can be viewed with the `/playerlist` command. This can be used to more easily ban a specific ISP or part of an ISP. Here are some examples:

```
/hostban static-34-28.example.com 2w Profanity is not allowed.
```

```
/hostban *.example.org 1d Repeated teamkilling and rejoining.
```

**NOTE:** In some situations, a player might not get the rejected message if they are host banned. Instead, when they try to connect, it will just hang during the join process and never show them the ban reason. This is due to a bug in the game server that sometimes causes the connection to be closed before the reject message is sent. So, if possible, avoid using hostbans.
