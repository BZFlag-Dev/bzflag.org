---
since: 2.4.4
signatures:
  -
    - dataType: int
      description: The id of the player to target
      name: playerID
      default: ~
    - dataType: bool
      description: Set to true to make a player spawn at their base on their next respawn
      name: base
      default: ~
returns:
  dataType: void
  description: ~
---

Specify whether or not a player should spawn at their base when they spawn next. This function should be used *before* a player spawns.
