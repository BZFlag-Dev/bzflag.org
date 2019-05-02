---
since: 2.4.0
category: Misc
signatures:
    - - dataType: int
        name: playerID
        description: The ID of player to be killed.
        default: ~
      - dataType: bool
        name: spawnOnBase
        description: If `true`, the killed player will respawn on their base.
        default: ~
      - dataType: int
        name: killerID
        description: The ID of the killer. If -1, `ServerPlayer` will be used.
        default: ~
      - dataType: const char*
        name: flagID
        description: If not `NULL`, the killed player will be killed with `flagID`.
        default: ~
returns:
    dataType: bool
    description: "`true` if the player was killed, otherwise `false`."
---

The player with the specified ID `playerID` is killed by the player with ID `killerID` using the optional flag `flagID`.