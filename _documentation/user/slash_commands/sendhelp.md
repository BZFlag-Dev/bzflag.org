---
command: sendhelp
syntax: "<slot# | callsign> <help file name>"
since: 2.4.0
category: Admin
permissions:
  - sendHelp
---

The sendhelp command allows sending a help topic to a specific user. It will show up in their chat box. This is commonly used to send the server rules to a player if they are misbehaving. This command requires that the server owner has set up help files. A list of possible help pages can be listed by using the /help command.

Example command:

```
/sendhelp someplayer rules
```

Example output for the one running the command:

```
[Admin] SERVER: Help topic rules was sent to SomePlayer by BobTheTank.
```

And SomePlayer would see, for example:

```
[SERVER->] Help: Rules
[SERVER->] ---
[SERVER->] Please be nice to everyone. Do not swear, cheat, or kill teammates.
[SERVER->] The admins have the right to mute, kick and ban those who do not follow the above rules.
```
