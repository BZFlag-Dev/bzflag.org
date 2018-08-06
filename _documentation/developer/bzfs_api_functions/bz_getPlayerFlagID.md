---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: playerID
      description: The player ID of whom to get the flag ID for
      default: ~
returns:
  dataType: int
  description: The ID of the flag the player is carrying. If the player does not exist or is not carrying a flag, it will return `-1`.
---

Get the flag ID for the flag a player is carrying.
