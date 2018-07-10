---
since: 2.4.0
signatures:
  -
    - dataType: int
      description: The id of the player to check
      name: playerID
      default: ~
returns:
  dataType: bool
  description: True if the player specified is paused
---

Check if a given player is currently paused.
