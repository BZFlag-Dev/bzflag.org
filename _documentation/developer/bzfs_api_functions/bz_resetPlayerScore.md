---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose score is being reset
      default: ~
returns:
  dataType: bool
  description: True if the player's score was reset successfully
---

Reset the number of wins, losses, and team kills for the specified player.
