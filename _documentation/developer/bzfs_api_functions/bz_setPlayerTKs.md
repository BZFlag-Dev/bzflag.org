---
since: 2.4.0
category: Player Score
signatures:
    - - dataType: int
        name: playerID
        description: The player whose number of team kills will be overwritten
        default: ~
      - dataType: int
        name: tks
        description: The new number of the team kills for the specified player
        default: ~
returns:
    dataType: bool
    description: True if the player score was overwritten successfully
---

Set the number of team kills for the specified player. This function will overwrite the number of team kills with the specified value.
