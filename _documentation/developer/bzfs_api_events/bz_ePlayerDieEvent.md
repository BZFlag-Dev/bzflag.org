---
dataType:
    current: bz_PlayerDieEventData_V2
    since: 2.4.10
    legacy:
        - dataType: bz_PlayerDieEventData_V1
          since: 2.4.0
category: Player
plugins:
    - Phoenix
    - RogueGenocide
    - customflagsample
    - keepaway
    - koth
    - playHistoryTracker
    - rabbitTimer
    - rabidRabbit
    - shockwaveDeath
parameters:
    - dataType: int
      description: ID of the player who was killed.
      name: playerID
    - dataType: bz_eTeamType
      description: The team the killed player was on.
      name: team
    - dataType: int
      description: The owner of the shot that killed the player, or BZ_SERVER for server side kills
      name: killerID
    - dataType: bz_eTeamType
      description: The team the owner of the shot was on.
      name: killerTeam
    - dataType: bz_ApiString
      description: The flag name the owner of the shot had when the shot was fired.
      name: flagKilledWith
    - dataType: int
      description: The ID of the flag the victim was holding when they died.
      name: flagHeldWhenKilled
      since: V2
    - dataType: int
      description: The shot ID that killed the player, if the player was not killed by a shot, the id will be -1.
      name: shotID
    - dataType: bz_PlayerUpdateState
      description: The state record for the killed player at the time of the event
      name: state
    - dataType: double
      description: Time of the event on the server.
      name: eventTime
---

This event is called each time a tank is killed.

The `killerID` attribute can changed by a plug-in to reassign the credit for a kill. This is useful when a world weapon is shot on behalf of a player and the kills belong to a player. Be careful, any number of plug-ins can reassign kills so be sure to only reassign kills under clear conditions for your plugin.

The [`bz_ePlayerDeathFinalizedEvent`]({{ url(collections.bzfs_api_events['bz_ePlayerDeathFinalizedEvent']) }}) is fired after all plug-ins after finished reassigning any kills.
