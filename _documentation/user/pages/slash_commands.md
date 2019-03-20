---
title: Slash Commands
docpath: slash_commands/
---

## Introduction

Slash commands provide a way to manage servers, change some settings, and request additional information (such as network quality information). Most commands are server-side, meaning the server processes them. A few are client-side, meaning they are processed by the client and never sent on the server.

Slash commands are sent via the chat mechanism, which can be initiated by pressing the <kbd>n</kbd> key (by default). After the command is typed, the Enter key will send the message.

Additionally, pressing <kbd>o</kbd> key will bring up a menu at the bottom of the screen that can be navigated through with the arrow keys. This provides a way to run various commands without manually typing them. The up and down arrow keys will choose the command to run, and the left and right keys can be used to select a player for commands that require that.

## Player commands

There commands are generally available to normal players, though some servers may restrict some of them to registered players.

@TODO Add loop for "Player" slash commands

## Admin commands

There are various commands that are commonly available to server admins (or cops).

### `/viewreports`

Some servers are configured to allow reports. Players can leave reports with the /report command. Admins may be able to view these reports. Some of these reports may require the server owner's help in tracking down a problem, but there are times when an admin/cop can handle an issue. By using the /viewreports command, an admin can view all the reports that have been left on the server.

**NOTE:** The server owner will have to be the one to manually clear out old reports. There is no integrated mechanism to clear them out, so it needs direct file-system access. This should be done periodically.

### `/countdown [seconds | pause | resume | cancel]`

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

### `/modcount <+seconds | -seconds>`

This command allows adding or removing time from a timed match. For example, `/modcount +30` would add 30 seconds and `/modcount -60` would subtract 60 seconds.

### `/record ...`

The record command is used on normal game servers to control the recording of replay files. The record command has several subcommands to control the recording of replay files.

`/record start`

This command will begin recording to the recording memory buffer. If the recording starts to exceed the buffer size, the oldest data will be purged. If the `-recbuf` server configuration is specified, the server will automatically begin recording into the memory buffer when started, making this command unnecessary.

`/record save <filename> [seconds]`

The record save command will save the current recording buffer to the specified file. So, for example, using `/record save manualsave` would write the replay to "manualsave" and display a message similar to:

```
[SERVER->] Record buffer saved to: recordings\manualsave
```

It is also possible to save a recent portion of the recording buffer by specifying a number of seconds after the filename. For example, to save the last 30 seconds, use `/record save somefile 30`. Because of how the recording system works, this will generally save a slightly larger duration.

`/record stop`

This command will stop a recording and discard the contents of the memory buffer.

`/record file <filename>`

This command will begin writing a recording to a specific file. This can exceed the buffer size and it is writing directly to disk. It must be stopped with `/record stop` at some point.

`/record size <Megabytes>`

This command will change the buffer size in memory. The minimum size is 1MB, and the default is 16MB. It is typically set on the server from the command line or the configuration file using the `-recbuf` parameter.

`/record rate <seconds>`

This controls how often a full set of states (variables, teams, flags, players, rabbit, game time) is written to the replay file. This defaults to 10 seconds, and supports a value between 1 and 30 seconds. A lower value use more storage but may help when seeking through replays.

`/record stats`

While recording, this command will show statistics about the recording. For example:

```
[SERVER->] Buffered:  28470 bytes / 154 packets / 49.7 seconds
```

`/record list [-t | -n | --] [pattern]`

This displays a list of existing replay files. See the `/replay list` documentation below for information about sorting and filtering. Here is an example of the output:

```
[SERVER->] dir:  recordings\
[SERVER->] #01:  manualsave                      [     35.2 seconds]
[SERVER->] #02:  tofile                          [     19.8 seconds]
```

### `/replay ...`

The replay command is only for a replay servers, which are servers are dedicated to the purpose of playing back game replays. The replay command has several subcommands to list, load, and control playback of a replay file.

`/replay list [-t | -n | --] [pattern]`

The replay list command will display a list of available replay files to play back. Passing -t will sort by time and -n will sort by name. A search pattern can also be provided. If the pattern needs to start with hyphen, -- can be provided before the pattern to indicate that it is the end of the options. For example, `/replay list -- -something-to-search-for`. Here is an example of the output:

```
[SERVER->] dir:  recordings\
[SERVER->] #01:  manualsave                      [     35.2 seconds]
[SERVER->] #02:  tofile                          [     19.8 seconds]
```

`/replay load <filename | #index>`

The replay load command will load a specific replay file into the game server's memory. **After loading a replay that contains a different map, all users connected to the replay server must rejoin.** For example, `/replay load manualsave` results in:

```
SERVER: An incompatible recording has been loaded
SERVER: Please rejoin or face the consequences (client crashes)
[SERVER->] Loaded file:  recordings\manualsave
[SERVER->]   author:     BobTheTank ()
[SERVER->]   protocol:   BZFS0221
[SERVER->]   server:     2.4.10.20170315-MAINT-linux-gnu-SDL
[SERVER->]   seconds:    35.2
[SERVER->]   start:      Fri May  5 03:36:02 2017
[SERVER->]   end:        Fri May  5 03:36:37 2017
```

`/replay play`

This starts the playback of replay file. It make take several seconds before activity appears.

`/replay loop`

This plays the replay in a continuous loop.

`/replay skip <+seconds | -seconds>`

The replay skip command allows skipping forward or backward by roughly the number of seconds specified. The amount that it skips will normally not be exactly what was asked as it skips to a point where the full set of data has been written, which defaults to 10 seconds. So, it may be necessary to skip back further than expected if intending to replay a section of the recording. For example, with `/record skip -4`, it might actually jump back 7 seconds:

```
BobTheTank: [REPLAY] skipped -7.0 seconds (asked -4)
```

During playback, there may also be instances where the replay server mentions there is no activity for a period of time. Using the `/replay skip` command with a small duration can be used to skip ahead to the next period of activity. For example:

```
SERVER: No activity for the next 335.3 seconds
BobTheTank: [REPLAY] skipped 326.8 seconds (asked 1)
```

`/replay stats`

The replay stats command shows information such as the replay duration and position. Here is an example of the output:

```
[SERVER->] Replay Date:  Fri May  5 03:36:26 2017  [68.53 %]  (24.1 secs / 35.2 secs)
```

`/replay pause`

The replay pause command pauses the playback of a replay. A subsequent `/replay play` will resume the playback.

### `/veto`

The veto command allows an admin to cancel a running poll.

### `/playerlist`

The playerlist command will provide the slot number, callsign, IP address, and hostname of every user on the server. This information can then be used for bans. Here is an example of the output:

```
[SERVER->] [0]SomePlayer : 192.168.4.3 (look.at.my.fancy.host.name) udp+
[SERVER->] [1]BobTheTank : 10.49.34.53 (somehost.somedomain.org) udp+
```

So, in the second line of text above, 1 is the slot number, "BobTheTank" is the player's name, 10.49.34.53 is the IP address, and somehost.somedomain.org is the hostname. At the end, there should also be a "udp+" shown. This means that the player has a UDP connection established in both directions.

**NOTE:** Although it is possible to use the slot number to issue kicks and bans, this is not recommended as it is too easy to kick/ban the wrong person. It is easy to mistype, or the target may leave and someone else may join into the same slot while the ban/kick command is being typed.

### `/kick <slot# | callsign> [reason]`

The kick command will remove a specific player from the server. This is typically used after a verbal warning. Either the slot # or callsign is required, optionally followed by a kick reason.

Example without spaces in the callsign:

`/kick SomePlayer Please stop killing your teammates.`

Example with spaces in the callsign:

`/kick "Six Feet Under" Profanity is not allowed on this server.`

### `/kill`

### `/mute <slot# | callsign>` ### `/unmute <slot# | callsign>`

The mute and unmute commands can be used as a step before a kick or ban is necessary. If someone is using profanity, for instance, a mute can put a temporary stop to that so that the player can be warned. When a player is muted, they can only send chat messages to the admin channel. The unmute command will remove the mute from a player. To use the mute or unmute command, provide the username or player slot.

For example, using the following command:

`/mute SomePlayer`

would show this to the admin:

```
[SERVER->] player id #0 "SomePlayer" is now muted.
```

and this to SomePlayer:

```
[SERVER->] You have been muted by BobTheTank.
```

It would also show similar messages when unmuting someone.

### `/flag ...`

The flag command has several subcommands that can be called, with "reset" and "take" likely being the most used.

`/flag up`

This causes all flags to drop/despawn and only return once `/flag reset` is run.

`/flag show`

This shows a list of all flags on the server along with their status and position.

Here is an example of the output:

```
[SERVER->] #0   i:A   p:-1  r:1  g:1  s:1  p:{-299.5, 311.2, 0.0}
[SERVER->] #1   i:A   p:-1  r:1  g:1  s:1  p:{134.2, -313.6, 31.0}
[SERVER->] #2   i:CL  p:-1  r:1  g:1  s:1  p:{-340.7, 232.8, 0.0}
[SERVER->] #3   i:ST  p:-1  r:1  g:1  s:1  p:{-31.9, -337.4, 0.0}
[SERVER->] #4   i:ST  p:0   r:1  g:1  s:2  p:{270.3, 109.5, 0.0}
[SERVER->] #5   i:SW  p:-1  r:1  g:1  s:1  p:{205.9, 16.7, 0.0}
[SERVER->] #6   i:TH  p:-1  r:1  g:1  s:1  p:{184.6, -207.2, 71.0}
[SERVER->] #7   i:US  p:-1  r:1  g:1  s:1  p:{-331.1, 211.0, 0.0}
[SERVER->] #8   i:V   p:2   r:1  g:1  s:2  p:{172.8, 137.4, 35.0}
[SERVER->] #9   i:V   p:-1  r:1  g:1  s:1  p:{-43.1, -134.5, 0.0}
```

The # is the flag ID, which can be useful for resetting a single flag. The `i:` show the abbreviation of the flag. The `p:` shows the player slot number of the player that holds the flag, with -1 indicating that nobody is holding it. The `r:` shows if it is a required flag, meaning it is not one that was randomly picked to spawn. The `g:` shows how many "grabs" of the flag are left before it would respawn in a new location.

The `s:` indicates the flag status, with:

- 0 meaning the flag does not exist
- 1 meaning the flag is on the ground
- 2 meaning the flag is on a tank
- 3 meaning the flag is in the air
- 4 meaning the flag is entering the world
- and 5 meaning the flag is leaving the world.

And finally the three values for `p:` are the x, y, and z coordinates of the flag.

`/flag reset <all|unused|team|flag abbreviation) [noteam]`

The "reset" sub-command allows respawning flags on the map. It requires an extra parameter, specifying what flags to reset. When a flag is reset, it will respawn in a new area. This is typically done to balance out the flags after a long period of play, or to bring back a team flag after a flag runner has carried it partially to the other team.

The optional parameter "noteam" can be added at the end of the `/flag reset all` and `/flag reset unused` to skip resetting team flags.

`/flag reset all`

This would reset every single flag on the map, even if a player is holding it.

`/flag reset all noteam`

This would reset every single non-team flag on the map, even if a player is holding it.

`/flag reset unused`

This would reset all flags that are not being held by players.

`/flag reset team`

This would reset all team flags.

`/flag reset <flag ID>`

Using the output of `/flag show`, it is possible to reset a single specific flag. For example, `/flag reset #5` would reset the flag with a flag ID of 5.

`/flag reset <flag abbreviation>`

It is also possible to reset specific types of flags. By passing a flag abbreviation, it will reset any flag of that type. To reset team flags for a single team, use G* for Green, B* for Blue, R* for Red, and P* for Purple. A the list of flag abbreviations are on the [flags](/documentation/flags/) documentation page. For example, `/flag reset G*` would reset all the Green team flags.

`/flag take <slot# | player name>`

The flag take command allows removing the flag that a player is carrying. It requires either the player's slot number or their callsign. It will cause the flag to drop where there are, and for non-team flags may cause the flag to respawn elsewhere on the map.

If this command is run:

`/flag take SomePlayer`

The admin issuing the command would see:

```
[SERVER->] BobTheTank took flag L/70 from SomePlayer
```

The player whose flag was taken does not see a message about who made them drop it.

`/flag give <slot# | player name> <flag abbreviation>`

It is also possible to give a flag to a player. In order for this to work, an available flag of this type must exist on the server.

### `/sendhelp` The sendhelp command allows sending a help topic to a specific user. It will show up in their chat box. This is commonly used to send the server rules to a player if they are misbehaving. This command requires that the server owner has set up help files. A list of possible help pages can be listed by using the /help command.

Example command:

`/sendhelp someplayer rules`

Example output for the one running the command:

`[Admin] SERVER: Help topic rules was sent to SomePlayer by BobTheTank.`

And SomePlayer would see, for example:

```
[SERVER->] Help: Rules
[SERVER->] ---
[SERVER->] Please be nice to everyone. Do not swear, cheat, or kill teammates.
[SERVER->] The admins have the right to mute, kick and ban those who do not follow the above rules.
```

### Ban durations

There are several ways to ban players from a server. Every type of ban needs to have a ban duration set. The supported units of time are years (y), weeks (w), days (d), and minutes (m). These can optionally be strung together like 1w2d30m to get 1 week, 2 days, 30 minutes. If only a number without units is specified, it defaults to minutes. The keywords "short" or "default" can be used to indicate a short ban, which defaults to 5 hours (which is controlled by the poll ban length). Providing 0, "max" or "forever" will set it to a permanent ban. If the admin/cop only has the "shortban" permission instead of the "ban" permission, the longest duration will be capped to the short duration.

### `/ban <slot# | callsign | ip address> <duration> <reason>`

The ban command is typically used after a player has been verbally warned and then kicked. It will prevent them from rejoining. The ban target is specified as a callsign (with quotes if they have spaces in their name), a slot # or an IP address. Banning by callsign will only work if the player is still on the server. It is recommended to avoid banning by slot # because the target player may leave and someone else that joins make be placed into that slot as the ban is issued, causing the wrong player to be banned. A ban duration is also required.

**NOTE: If a user is globally identified (they have a plus sign by their name), banning by callsign will ban their IP address AND their BZID. If the IP ban is later removed, the ID ban will remain and prevent them from using their registered name. The ID ban must also be removed with the /idunban command.**

Examples:

`/ban "Six Feet Under" 30m Please do not use profanity.`

`/ban 192.168.4.3 1w Teamkilling is not allowed. You have been warned repeatedly.`

There are also times when a player will rejoin with a different, but similar IP address. This is an issue with dynamic IP addresses. An Internet Service Provider (ISP) will rarely give each user their own dedicated (aka "static") IP address. When their modem connects, they get an address from a pool of available addresses. This can cover a huge range of addresses in some cases, which may require banning a range if things get bad enough.

There are two ways to ban a range of addresses: using an asterisk (\*) wildcard character or [CIDR notation](http://www.subnet-calculator.com/cidr.php). CIDR notation has been available since BZFlag 2.4.4, and allows for more granular ranges to be specified. Example:

`/ban 192.168.4.* 2w Cheater (god mode)` (This bans 192.168.4.0 - 192.168.4.255)

`/ban 10.50.*.* 1d Teamkilling is not allowed.` (This bans 10.50.0.0 - 10.50.255.255)

`/ban 172.16.0.0/26 30d Excessive profanity.` (This bans 172.16.0.0 - 172.16.0.63)

Range bans have a higher possibility of banning innocent players as it is banning a (sometimes large) chunk of the Internet. So, in some cases it may be necessary to work with the server owner to fine tune the range bans or to whitelist innocent player accounts.

### `/banlist [filter]`

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

`/banlist cheat`

### `/checkip <ip address>`

This command will check if an IP address is banned. This only checks IP bans, so even if it says that an IP is not banned, there still might be a host ban or an ID ban preventing a player from joining. Examples:

`/checkip 127.0.0.1`

```
[SERVER->] 127.0.0.1 is not banned.
```

`/checkip 192.168.4.3`

```
[SERVER->] 192.168.4.3 is banned:
[SERVER->] 192.168.4.3 (256.1 minutes) banned by: BobTheTank
[SERVER->]    reason: Please do not use profanity.
```

### `/unban <ip address>`

The unban command can remove IP bans. The `/banlist` command will show the exact address or range that was banned. The unban command must be passed the exact IP or range that was banned. Example:

`/unban 192.168.4.3`

Or to unban a range:

`/unban 172.16.0.0/26`

### `/hostban <hostname> <duration> <reason>`

The hostban command is used to ban players by their hostname. Most players will have a hostname, which can be viewed with the `/playerlist` command. This can be used to more easily ban a specific ISP or part of an ISP. Here are some examples:

`/hostban static-34-28.example.com 2w Profanity is not allowed.`

`/hostban *.example.org 1d Repeated teamkilling and rejoining.`

**NOTE:** In some situations, a player might not get the rejected message if they are host banned. Instead, when they try to connect, it will just hang during the join process and never show them the ban reason. This is due to a bug in the game server that sometimes causes the connection to be closed before the reject message is sent. So, if possible, avoid using hostbans.

### `/hostbanlist [filter]`

The hostbanlist command will list all active host bans. For each ban, it will list the IP that is banned, duration remaining (unless it is a permanent ban), reason, and the one who created the ban. As with the banlist command, the hostbanlist command allows adding a filter to search for specific entries.

Here is an example of the output:

```
[SERVER->] static-34-28.example.com (10058.6 minutes)  banned by: BobTheTank
[SERVER->]    reason: Profanity is not allowed.
```

### `/hostunban <hostname>`

The hostunban command can remove host bans. The `/hostbanlist` command will show the exact hostname (wildcard or otherwise) that was banned. The hostunban command must be passed the exact hostname that was banned. Example:

`/hostunban *.example.org`

### `/idlist`

The idlist command will display the global ID (also known as their bzid) of the players on the server. Unregistered players will not show a global ID. Example of the output:

```
[SERVER->] CasualFriday         :
[SERVER->] SomePlayer           : 179
```

### `/idban <slot# | callsign | +bzid> <duration> <reason>`

This command is not used as often. When a registered player is IP banned by callsign or slot number, it adds a corresponding ID ban as well. Also, an ID ban only blocks a single account, so a user can either switch to a different account, or just use an unregistered name. ID bans are more useful on servers that require a registered account to spawn or talk.

Here's an example:

`/idban SomePlayer 2w Repeated teamkilling after several warnings.`

It is also possible to ban a BZID after the user has already left, either obtained from /idlist while they were on or the server log files. So in the case of SomePlayer, their BZID is 179. Including a plus (+) sign before the number indicates it is specifying a BZID instead of a callsign.

`/idban +179 2w Repeated teamkilling after server warnings.`

### `/idbanlist`

This will list any current ID bans that are active. Again, it optionally allows filtering out the list to search for specific entries. Example output:

```
[SERVER->] 179 (1439.0 minutes) banned by: BobTheTank
[SERVER->]    reason: (SomePlayer) Repeated teamkilling after server warnings.
```

### `/idunban <bzid>`

The idunban command removes an ID ban. Provide the ID to unban.

`/idunban 179`

### `/masterban <flush | reload | list>`

The masterban list is a secondary ban list that defaults to a ban list managed by the BZFlag developers. The URL for the list can be customized by the server owner, however. The masterban command can be used to flush (which removes all master ban), reload, or list the masterbans.

## Server owner commands

These are commands that generally only the server owner has access to as they allow configuration changes to the server.

### `/idletime [value]`

This views or sets the amount of time, in seconds, that a non-observer is allowed to be idle on the server (paused or dead).

### `/lagwarn [value]`

This views or sets the amount of latency between the client and server, in milliseconds, that a player is allowed to have before warnings are issued to the player. A common value would be 200 to 300 ms.

### `/lagdrop [value]`

This views or sets the number of warnings for high lag (latency) that a player is issued before the server kicks the player. A common value is 3.

### `/jitterwarn [value]`

This views or sets the amount of jitter (which is variation in latency), in milliseconds, that a player is allowed to have before warnings are issued to the player. A common value would be 10 to 15 ms.

### `/jitterdrop [value]`

This views or sets the number of warnings for high jitter (variation in latency) that a player is issued before the server kicks the player. A common value is 3.

### `/packetlosswarn [value]`

This views or sets the percentage of packets lost or received out-of-order that a player is allowed to have before warnings are issued to the player. A common value is 1 to 2 percent.

### `/packetlossdrop [value]`

This views or sets the number of warnings for high packet loss that a player is issued before the server kicks the player. A common value is 3.

### `/set [variable] [value]`

This command shows or sets BZDB variables, server settings which control aspects of the gameplay (such as tank speed, gravity, and some flag attributes).

The sample output here is a bit harder to read than in-game because it lacks colors. In the output, there will be three values. The first value is the computed (and effective) value. The second is the value or equation that defines the computed value, which can reference other variables and make use of basic math operators. The third is the default value or equation for that variable, based on the client's default values.

If no variable is specified, it will print out all variables and their values. So, `/set` would output:

```
BobTheTank: /set _*
BobTheTank: /set _agilityAdVel 2.25 2.25 2.25
BobTheTank: /set _agilityTimeWindow 1 1.0 1.0
BobTheTank: /set _agilityVelDelta 0.3 0.3 0.3
BobTheTank: /set _ambientLight -nan none none
BobTheTank: /set _angleTolerance 0.05 0.05 0.05
BobTheTank: /set _angularAd 1.5 1.5 1.5
...
```

If a specific variable is specified without a value, it will print that specific variable's value. So, `/set _shotSpeed` would output:

```
BobTheTank: /set _shotSpeed
BobTheTank: /set _shotSpeed 100 100.0 100.0
```

If a wildcard character (an asterisk) is used as part of the variable name, it will show any variables that match that pattern and their values. So, `/set _tank*` outputs:

```
BobTheTank: /set _tank*
BobTheTank: /set _tankAngVel 0.785398 0.785398 0.785398
BobTheTank: /set _tankExplosionSize 21 3.5 * _tankLength 3.5 * _tankLength
BobTheTank: /set _tankHeight 2.05 2.05 2.05
BobTheTank: /set _tankLength 6 6.0 6.0
BobTheTank: /set _tankRadius 4.32 0.72 * _tankLength 0.72 * _tankLength
BobTheTank: /set _tankSpeed 25 25.0 25.0
BobTheTank: /set _tankWidth 2.8 2.8 2.8
```

And finally, if a specific variable and a value is specified, it will set the variable's value. So, `/set _shotSpeed 150` would output:

```
[SERVER->] _shotSpeed set
SERVER: Variable Modification Notice by BobTheTank of set _shotSpeed 150
```

### `/reset <variable>`

This command resets BZDB variables, server settings which control aspects of the gameplay. It must be passed either a specific variable or an asterisk (*), the latter of which would reset *all\* variables.

### `/handicap`

For servers that make use of the handicap feature that gives advantages to players with lower scores and disadvantages to those with higher scores, this command lists the handicap values by player.

### `/reload <all | groups | bans | helpfiles | badwords>`

The reload command allows reloading various files that the server uses. This is useful in cases where the files have been edited and the server cannot be restarted (such as when players are online). Depending on the keyword passed, either the groups file, bans file, help pages, badwords, or all of the files are read from the disk again. Note that only help files that were already configured will be reloaded. To add or remove help pages, a game server restart is still necessary.

### `/serverdebug <level>`

This command alters the debug level of the server, which controls how much output is written to the terminal running the server. Valid values are 0 through 4, though it is recommended to keep it at 3 or lower.

### `/gameover`

This command ends the current game. If the server is configured to shut down at the end of a game, this will shut the server down. Otherwise, players will be required to rejoin to continue playing.

### `/superkill`

This command removes every player from the server (including the admin that issued it).

### `/shutdownserver`

This command kicks all the players and shuts the game server down.
