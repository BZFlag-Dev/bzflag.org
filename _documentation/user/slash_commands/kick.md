---
command: kick
syntax: "<slot# | callsign> [reason]"
since: 2.4.0
category: Admin
permissions:
  - kick
---

The kick command will remove a specific player from the server. This is typically used after a verbal warning. Either the slot # or callsign is required, optionally followed by a kick reason.

Example without spaces in the callsign:

```
/kick SomePlayer Please stop killing your teammates.
```

Example with spaces in the callsign:

```
/kick "Six Feet Under" Profanity is not allowed on this server.
```
