---
title: countdown
syntax: "[seconds | pause | resume | cancel]"
since: 2.4.0
category: Admin
permissions:
  - countdown
---

The countdown command can be used to control a timed match. If it is run without any additional option and the server is configured for manual timed matches, it will start the countdown with whatever time limit had been set. By default there will be a 10 second delay before the timed match begins. If a number of seconds is provided, up to 120, the countdown before the timed match will use that value instead.

So, a `/countdown 5` would output:

```
SERVER: Team scores reset, countdown started by BobTheTank.
SERVER: Match begins in about 10 secs
SERVER: Match duration is 10 mins
SERVER: Start your engines!......
SERVER: 5...
SERVER: 4...
SERVER: 3...
SERVER: 2...
SERVER: 1...
SERVER: The match has started!...Good Luck Teams!
```

The `/countdown cancel` command can be used during the countdown before the timed match starts to abort the match. The `/countdown pause` and `/countdown resume` commands can be used to pause and resume a timed match. Here is the output from pausing and resuming a match:

```
SERVER: Countdown paused by BobTheTank
Game Paused
SERVER: Countdown is being resumed by BobTheTank
SERVER: 5...
SERVER: 4...
SERVER: 3...
SERVER: 2...
SERVER: 1...
SERVER: Countdown resumed
```
