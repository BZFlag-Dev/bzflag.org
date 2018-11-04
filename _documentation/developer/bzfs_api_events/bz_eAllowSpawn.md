---
dataType: bz_AllowSpawnData_V1
since: 2.4.0
category: Player Spawns
plugins: ~
parameters:
  - dataType: int
    description: This value is the player ID for the joining player.
    name: playerID
  - dataType: bz_eTeamType
    description: The team the player belongs to.
    name: team
  - dataType: bool
    description: Whether or not the plugin will be handling the respawn or not.
    name: handled
  - dataType: bool
    description: Set to false if the player should not be allowed to spawn.
    name: allow
  - dataType: double
    description: The server time the event occurred (in seconds.)
    name: eventTime
---

This event is called before a player respawns
