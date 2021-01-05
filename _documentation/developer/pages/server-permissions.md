---
title: Server Permissions
docpath: server-permissions/
---

Permissions can be assigned to groups and individual players on a server. These permissions control what a player may or may not do on the server. Many of the permissions control which [commands](/documentation/slash-commands/) can be used by players.

| Permission          | Description |
| ------------------- | ----------- |
| adminMessageReceive | Receives messages sent to the admin channel |
| adminMessageSend    | Allows sending messages to the admin channel |
| hideAdmin           | Doesn't show `@` |
| info                |  |
| privateMessage      | Allows sending private messages with `.` |
| rejoin              | Allows rejoining instantly, regardless of `_rejoinTime` |
| removePerms         | Allows removing permissions from players |
| requireIdentify     | Requires callsign to identify before allowed to spawn |
| setPerms            | Alls granting permissions to players |
| shortBan            | Allows bans with limited duration only |
| showAdmin           | Gives player an `@` regardless of having the `shortban` or `ban` permission; the `hideAdmin` permission supersedes the `showAdmin` permission |
| spawn               | Allows joining the game as a player; observers don't need this permission |
| talk                | Allows sending messages |

## Commands

Some commands require a permission to use them.

| Permission          | Granted Command(s) |
| ------------------- | ----------- |
| actionMessage       | [/me](/documentation/slash-commands/me/) |
| ban                 | [/ban](/documentation/slash-commands/ban/) |
| banlist             | [/banlist](/documentation/slash-commands/banlist/) |
| clientquery         | /clientquery |
| countdown           | [/countdown](/documentation/slash-commands/countdown/) |
| date                | [/date](/documentation/slash-commands/date/) |
| endGame             | [/gameover](/documentation/slash-commands/gameover/) |
| flagHistory         | [/flaghistory](/documentation/slash-commands/flaghistory/) |
| flagMaster          | [/flag](/documentation/slash-commands/flag/) |
| flagMod             | [/flag reset](/documentation/slash-commands/flag/#resetting-flags), [/flag show](/documentation/slash-commands/flag/#listing-flags) and [/flaghistory](/documentation/slash-commands/flaghistory/); using [/flag reset](/documentation/slash-commands/flag/#resetting-flags) to reset an individual flag requires `flagMaster` |
| idlestats           | [/idlestats](/documentation/slash-commands/idlestats/) |
| jitterwarn          | [/jitterwarn](/documentation/slash-commands/jitterwarn/) and [/jitterdrop](/documentation/slash-commands/jitterdrop/) to query or set `jitterwarn`/`jitterdrop` variables |
| kick                | [/kick](/documentation/slash-commands/kick/) |
| kill                | [/kill](/documentation/slash-commands/kill/) |
| lagstats            | [/lagstats](/documentation/slash-commands/lagstats/) |
| lagwarn             | [/lagwarn](/documentation/slash-commands/lagwarn/) and [/lagdrop](/documentation/slash-commands/lagdrop/) to query or set `lagwarn`/`lagdrop` variables |
| listPerms           | [/showperms](/documentation/slash-commands/showperms/) |
| listPlugins         | [/listplugins](/documentation/slash-commands/listplugins/) |
| loadPlugin          | [/loadplugin](/documentation/slash-commands/loadplugin/) |
| masterban           | [/masterban](/documentation/slash-commands/masterban/) |
| modcount            | [/modcount](/documentation/slash-commands/modcount/) |
| mute                | [/mute](/documentation/slash-commands/mute/) |
| packetlosswarn      | [/packetlosswarn](/documentation/slash-commands/packetlosswarn/) and [/packetlossdrop](/documentation/slash-commands/packetlossdrop/) to query or set `packetlosswarn`/`packetlossdrop` variables |
| playerList          | [/playerlist](/documentation/slash-commands/playerlist/) |
| plugins             | [/listplugins](/documentation/slash-commands/listplugins/), [/loadplugin](/documentation/slash-commands/loadplugin/) and [/unloadplugin](/documentation/slash-commands/unloadplugin/) (requires BZFlag to be built with the optional plug-in support) |
| poll                | [/poll](/documentation/slash-commands/poll/) |
| pollBan             | [/poll ban](/documentation/slash-commands/poll/#ban-a-player) |
| pollFlagReset       | [/poll flagreset](/documentation/slash-commands/poll/#flag-reset) |
| pollKick            | [/poll kick](/documentation/slash-commands/poll/#kick-a-player) |
| pollKill            | [/poll kill](/documentation/slash-commands/poll/#kill) |
| pollSet             | /poll set |
| record              | [/record](/documentation/slash-commands/record/) |
| replay              | [/replay](/documentation/slash-commands/replay/) |
| report              | [/report](/documentation/slash-commands/report/) |
| say                 | [/say](/documentation/slash-commands/say/) |
| sendHelp            | [/sendhelp](/documentation/slash-commands/sendhelp/) |
| setAll              | Grants all `set*` permissions, allows use of [/reload](/documentation/slash-commands/reload/) and [/serverdebug](/documentation/slash-commands/serverdebug/) |
| setVar              | [/set](/documentation/slash-commands/set/) |
| showOthers          | [/showgroup](/documentation/slash-commands/showgroup/) and [/showperms](/documentation/slash-commands/showperms/) on other callsigns |
| shutdownServer      | [/shutdownserver](/documentation/slash-commands/shutdownserver/) |
| superkill           | [/superkill](/documentation/slash-commands/superkill/) |
| unban               | [/unban](/documentation/slash-commands/unban/) |
| unloadPlugin        | [/unloadplugin](/documentation/slash-commands/unloadplugin/) |
| unmute              | [/unmute](/documentation/slash-commands/unmute/) |
| veto                | [/veto](/documentation/slash-commands/veto/) |
| viewReports         | [/viewreports](/documentation/slash-commands/viewreports/) |
| vote                | [/vote](/documentation/slash-commands/vote/) |

## Command Immunity

Each permission provides immunity to a specific command.

| Permission          | Immune to Command |
| ------------------- | ----------- |
| antiban             | [/ban](/documentation/slash-commands/ban/) |
| antikick            | [/kick](/documentation/slash-commands/kick/) |
| antikill            | [/kill](/documentation/slash-commands/kill/) |
| antipoll            | [/poll](/documentation/slash-commands/poll/) |
| antipollban         | [/poll ban](/documentation/slash-commands/poll/#ban-a-player) |
| antipollkick        | [/poll kick](/documentation/slash-commands/poll/#kick-a-player) |
| antipollkill        | [/poll kill](/documentation/slash-commands/poll/#kill) |
