---
since: 2.4.4
category: Player State
signatures:
  -
    - dataType: int
      description: The id of the player to target
      name: playerID
      default: ~
returns:
  dataType: bool
  description: True if the target player will be spawning at their base next respawn
---

Check if a player is supposed to spawn at their base on their next respawn.
