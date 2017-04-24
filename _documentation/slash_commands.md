---
title: Slash Commands
docpath: slash_commands.html
---

## Introduction
Slash commands provide a way to manage servers, change some settings, and request additional information (such as network quality information). Most commands are server-side, meaning the server processes them. A few are client-side, meaning they are processed by the client and never sent on the server.

Slash commands are sent via the chat mechanism, which can be initiated by pressing the <kbd>n</kbd> key (by default). After the command is typed, the Enter key will send the message.

Additionally, pressing <kbd>o</kbd> key will bring up a menu at the bottom of the screen that can be navigated through with the arrow keys. This provides a way to run various commands without manually typing them. The up and down arrow keys will choose the command to run, and the left and right keys can be used to select a player for commands that require that.


## Player commands

###```/highlight <pattern>```

The highlight command is a client-side command that can be used to highlight messages in the message panel. A word or regular expression is used to match messages that will be highlighted based on the highlight setting configured (which can be underlined or flashing). Only a single highlight pattern can be set, so running the command a second time will replace the existing pattern. 

Highlight any line that contains "someword":

```/highlight someword```

Hightlight any line that contains either "genocide", "guided missile", or "laser":

```/highlight (genocide|guided missile|laser)```

And more advanced regular expressions can be used as well.

###```/idlestats```

The idlestats command will show how long a player has been idle. "Idle" is defined as being dead or paused. It will specifically show if someone is paused, and how long they have been paused.

Example output:

```
[SERVER->] SomePlayer : 0s
[SERVER->] SixFeetUnder : 16s
[SERVER->] BobTheTank : 13s paused 13s
```

###```/lagstats```

The lagstats command is similar to idlestats. It shows a line for each player, followed by two or three sets of numbers.

Example output:

```
[SERVER->] [ 0] JustViewin : 131ms
[SERVER->] [ 1] SomePlayer : 78 +- 6ms
[SERVER->] [ 2] BobTheTank : 61 +- 22ms 5% lost/ooo
```

The first number insider the square brackets will only show up for admins/cops that have the ban or shortban permission. This is the player slot number.

After the player name, there can be up to three numeric values.  These are lag (also known as latency), jitter, and packet loss. Packet loss will be a percentage and will only show up if the player has lost or out-of-order packets. Observers (in the case of the example above, JustViewin) will only show the lag value.

Lag is the network delay between the client and the server. Ideally this will be under 100ms. A common server limit will be 300ms. 

Jitter is a variation in this lag time. If someone has jitter, their movement will appear less smooth. Jitter is commonly caused by running other software in the background (such as browsers, downloads, etc) that suck up CPU time. It can also be caused by their Internet connection itself, and WiFi is more prone to have jitter.

Packet loss may exhibit similar issues to jitter (tank movement will not be as smooth) but it usually has fewer but larger "jumps" in the movement. This is almost always caused by a poor Internet connection, and can again be more common with WiFi.

###```/msg```
###```/serverquery```
###```/part```
###```/quit```
###```/uptime```
###```/flaghistory```
###```/report```
###```/help```
<h3 id="questionmark"><code>/?</code></h3>

###```/grouplist```
###```/showgroup```
###```/groupperms```
###```/showperms [callsign]```

This command lists the current permissions assigned to the user. It optionally allows a callsign to be specified after it to show the permissions for another player if the user has the SHOWOTHERS permission, which is generally reserved for admins. Here is an example of the output:

```
[SERVER->] Permissions for: BobTheTank
[SERVER->] actionMessage
[SERVER->] adminMessageReceive
[SERVER->] adminMessageSend
[SERVER->] antiban
[SERVER->] antideregister
[SERVER->] antikick
[SERVER->] antikill
[SERVER->] antipoll
[SERVER->] antipollban
...
```

###```/poll```
###```/vote```

###```/date```
###```/time```


## Admin commands

There are various commands that are commonly available to server admins (or cops).

### Ban durations

There are several ways to ban players from a server. Every type of ban needs to have a ban duration set. The supported units of time are years (y), weeks (w), days (d), and minutes (m). These can optionally be strung together like 1w2d30m to get 1 week, 2 days, 30 minutes. If only a number without units is specified, it defaults to minutes. The keywords "short" or "default" can be used to indicate a short ban, which defaults to 5 hours (which is controlled by the poll ban length). Providing 0, "max" or "forever" will set it to a permanent ban. If the admin/cop only has the "shortban" permission instead of the "ban" permission, the longest duration will be capped to the short duration.

####```/ban```
###```/hostban```
###```/idban```

###```/unban```
###```/hostunban```
###```/idunban```

###```/banlist```
###```/checkip```
###```/hostbanlist```
###```/idbanlist```
###```/masterban```

###```/idlist```
###```/playerlist```

###```/kick```
###```/kill```
###```/mute```
###```/unmute```

###```/countdown```
###```/modcount```
###```/flag```
###```/sendhelp```
The sendhelp command allows sending a help topic to a specific user. It will show up in their chat box. This is commonly used to send the server rules to a player if they are misbehaving. This command requires that the server owner has set up help files. A list of possible help pages can be listed by using the /help command.

Example command:

```/sendhelp someplayer rules```

Example output for the one running the command:

```[Admin] SERVER: Help topic rules was sent to SomePlayer by BobTheTank.```

And SomePlayer would see, for example:

```
[SERVER->] Help: Rules
[SERVER->] ---
[SERVER->] Please be nice to everyone. Do not swear, cheat, or
kill teammates.
[SERVER->] The admins have the right to mute, kick and ban
those who do not follow the above rules.
```

###```/veto```

###```/viewreports```

Some servers are configured to allow reports.  Players can leave reports with the /report command. Admins may be able to view these reports. Some of these reports may require the server owner's help in tracking down a problem, but there are times when an admin/cop can handle an issue. By using the /viewreports command, an admin can view all the reports that have been left on the server.

**NOTE:** The server owner will have to be the one to manually clear out old reports. There is no integrated mechanism to clear them out, so it needs direct file-system access. This should be done periodically. 

###```/record```
###```/replay```


## Server owner commands

These are commands that generally only the server owner has access to as they allow configuration changes to the server.

###```/idletime```
###```/lagwarn```
###```/lagdrop```
###```/jitterwarn```
###```/jitterdrop```
###```/packetlosswarn```
###```/packetlossdrop```

###```/set```
###```/reset```

###```/handicap```
###```/setgroup```
###```/removegroup```
###```/reload```

###```/serverdebug```

###```/gameover```
###```/superkill```
###```/shutdownserver```
