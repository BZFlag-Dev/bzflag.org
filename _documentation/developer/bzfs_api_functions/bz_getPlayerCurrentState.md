---
since: 2.4.0
signatures:
  -
    - dataType: int
      description: The id of the player to target
      name: playerID
      default: ~
    - dataType: bz_PlayerUpdateState
      description: A reference to a bz_PlayerUpdateState object to put the player state information into.
      name: "&state"
      default: ~
returns:
  dataType: void
  description: ~
---

Gets the specified player's current state. This includes information about how fast they're traveling, if they're in the air, if they're rotating, and more.

A player's state changes very frequently (since players are typically on the move, fighting, and jumping, just to name a few), so the data obtained from this method won't be valid for very long.
