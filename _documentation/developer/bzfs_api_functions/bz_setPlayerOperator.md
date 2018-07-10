---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: playerID
      description: The player ID to set as an operator
      default: ~
returns:
  dataType: bool
  description: True if the player was successfully set as an operator
---

Mark a player as a server operator. This is the equivalent of a player using the `/password` command.
