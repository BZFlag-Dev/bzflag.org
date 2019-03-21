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

@TODO Add loop for "Admin" slash commands

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
