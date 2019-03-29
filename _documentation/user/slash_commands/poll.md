---
command: poll
syntax: "<flagreset | kill | kick | ban | ...> [target]"
since: 2.4.0
category: Player
permissions: 
  - poll
  - pollBan
  - pollFlagReset
  - pollKick
  - pollKill
---

To allow players to remove problem players from a server when an admin is not around, the game provides a poll system. Generally this is restricted registered users only to limit abuse. To start a poll, there must be a minimum number of players that are able to vote. By default, 3 players (counting the one starting the poll) must be able to vote for a poll to be started. The default poll duration is 60 seconds, and the default percentage of "yes" votes required to pass the poll is 50.1%. Additionally, by default, a individual player is only able to run a poll once every 5 minutes.

The built-in poll types are flagreset, kill, kick, and ban. The kill, kick, and ban poll types all require that a player callsign is specified. As of BZFlag 2.4.10, the server can also add additional poll types through the use of plugins. The servers running such as a plugin will need to provide their own instructions for use. Here are some examples of the built-in poll types.

## Flag Reset

Syntax: `/poll <flagreset>`

This would start a poll to reset all the flags on the map.

## Kill

Syntax: `/poll kill <SomePlayer>`

This would start a poll to kill SomePlayer.

## Kick a Player

Syntax: `/poll kick <SomePlayer>`

This would start a poll to kick SomePlayer from the server.

## Ban a Player

Syntax: `/poll ban <SomePlayer>`

This would start a poll to ban SomePlayer from the server. The ban duration by default is 5 hours.
