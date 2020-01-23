---
since: 2.4.0
category: Spawn Management
signatures:
    - - dataType: int
        name: playerID
        description: The player ID for whom to get a spawn position for
        default: ~
      - dataType: float
        name: pos[3]
        description: The spawn position a player will be able to spawn at.
        default: ~
      - dataType: float*
        name: rot
        description: The rotation a player will have for this spawn.
        default: ~
returns:
    dataType: bool
    description: ~
---

Get a standard spawn position for a player anywhere on the map.
