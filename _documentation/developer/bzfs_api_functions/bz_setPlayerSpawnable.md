---
since: 2.4.4
category: Player State
signatures:
    - - dataType: int
        description: The id of the player to target
        name: playerID
        default: ~
      - dataType: bool
        description: Set to true to allow a player to spawn
        name: spawn
        default: ~
returns:
    dataType: bool
    description: True if target player was valid and setting the spawnablity was successful
---

Marks this player as allowed to spawn or not allowed to spawn. This is not to be confused with having the SPAWN permission; when a player is not spawnable, they will not be able to spawn but won't be kicked if they attempt to spawn.
