---
dataType:
    current: bz_GetAutoTeamEventData_V1
    since: 2.4.0
    legacy: ~
category: Player
plugins: ~
parameters:
    - dataType: int
      description: ID of the player that is being added to the game.
      name: playerID
    - dataType: bz_ApiString
      description: Callsign of the player that is being added to the game.
      name: callsign
    - dataType: bz_eTeamType
      description: The team that the player will be added to.
      name: team
    - dataType: bool
      description: The current state representing if other plug-ins have modified the default team.
      name: handled
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is called for each new player is added to a team
