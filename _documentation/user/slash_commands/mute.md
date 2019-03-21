---
command: mute
syntax: "<slot# | callsign>"
since: 2.4.0
category: Admin
permissions:
  - mute
---

The mute command can be used as a step before a kick or ban is necessary. If someone is using profanity, for instance, a mute can put a temporary stop to that so that the player can be warned. When a player is muted, they can only send chat messages to the admin channel. To use the mute command, provide the username or player slot.

For example, using the following command:

```
/mute SomePlayer
```

would show this to the admin:

```
[SERVER->] player id #0 "SomePlayer" is now muted.
```

and this to SomePlayer:

```
[SERVER->] You have been muted by BobTheTank.
```
