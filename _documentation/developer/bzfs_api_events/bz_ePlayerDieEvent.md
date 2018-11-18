---
dataType: bz_PlayerDieEventData_V2
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
      description: (since 2.4.10) The ID of the flag the victim was holding when they died.
      name: flagHeldWhenKilled
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
