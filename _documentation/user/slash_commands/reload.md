---
command: reload
syntax: "<all | groups | bans | helpfiles | badwords>"
since: 2.4.0
category: Server Owner
permissions:
  - setAll
---

The reload command allows reloading various files that the server uses. This is useful in cases where the files have been edited and the server cannot be restarted (such as when players are online). Depending on the keyword passed, either the groups file, bans file, help pages, badwords, or all of the files are read from the disk again. Note that only help files that were already configured will be reloaded. To add or remove help pages, a game server restart is still necessary.
