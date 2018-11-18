---
since: 2.4.0
category: Player Score
signatures:
    - - dataType: int
        name: playerID
        description: The player whose number of wins will be overwritten
        default: ~
      - dataType: int
        name: wins
        description: The new number of the wins for the specified player
        default: ~
returns:
    dataType: bool
    description: True if the player score was overwritten successfully
---

Set the number of wins for the specified player. This function will overwrite the number of wins with the specified value.
