---
title: lagstats
syntax: ~
since: 2.4.0
category: Player
permissions:
  - lagstats
---

The lagstats command is similar to idlestats. It shows a line for each player, followed by two or three sets of numbers.

Example output:

```
[SERVER->] [ 0] JustViewin : 131ms
[SERVER->] [ 1] SomePlayer : 78 +- 6ms
[SERVER->] [ 2] BobTheTank : 61 +- 22ms 5% lost/ooo
```

The first number insider the square brackets will only show up for admins/cops that have the ban or shortban permission. This is the player slot number.

After the player name, there can be up to three numeric values. These are lag (also known as latency), jitter, and packet loss. Packet loss will be a percentage and will only show up if the player has lost or out-of-order packets. Observers (in the case of the example above, JustViewin) will only show the lag value.

Lag is the network delay between the client and the server. Ideally this will be under 100ms. A common server limit will be 300ms.

Jitter is a variation in this lag time. If someone has jitter, their movement will appear less smooth. Jitter is commonly caused by running other software in the background (such as browsers, downloads, etc) that suck up CPU time. It can also be caused by their Internet connection itself, and WiFi is more prone to have jitter.

Packet loss may exhibit similar issues to jitter (tank movement will not be as smooth) but it usually has fewer but larger "jumps" in the movement. This is almost always caused by a poor Internet connection, and can again be more common with WiFi.
