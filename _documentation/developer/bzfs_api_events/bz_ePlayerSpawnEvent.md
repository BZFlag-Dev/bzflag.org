---
dataType: bz_PlayerSpawnEventData_V1
since: 2.4.0
category: Player Spawns
plugins: ~
parameters:
  - dataType: int
    description: ID of the player who was added to the world.
    name: playerID
  - dataType: bz_eTeamType
    description: The team the player is a member of.
    name: team
  - dataType: bz_PlayerUpdateState
    description: The state record for the spawning player
    name: state
  - dataType: double
    description: Time local server time for the event.
    name: eventTime
---

This event is called each time a playing tank is being spawned into the world
