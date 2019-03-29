---
command: banlist
syntax: "[filter]"
since: 2.4.0
category: Admin
permissions:
  - ban
  - shortBan
---

The banlist command will list all active IP bans. This will include most (if not all) of the bans from the masterban list. Bans from the masterban list will display "(m)" after the banned address. For each ban, it will list the IP that is banned, duration remaining, reason, and the one who created the ban.

Here is an example of what a masterban would look like. Notice the (m) after the IP address:

```
[SERVER->] 127.0.0.1 (m) banned by: bzflag developers
[SERVER->] reason: web service abuse
```

And here is an example of a regular ban that was created by an admin or cop on the server. Notice that it shows a duration in this example. If the ban is permement (duration set to 0, "forever", or "max") it will not show a duration:

```
[SERVER->] 192.168.4.3 (256.1 minutes) banned by: BobTheTank
[SERVER->] reason: Please do not use profanity.
```

A ban list can get quite long. It is possible to pass a filter to the /banlist command that will search for a specific word or phrase. It will search the reason as well as the name of the admin who created the ban. The example below would only list bans that contain the word "cheat":

```
/banlist cheat
```
