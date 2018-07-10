---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose number of losses will be overwritten
      default: ~
    - dataType: int
      name: losses
      description: The new number of the losses for the specified player
      default: ~
returns:
  dataType: bool
  description: True if the player score was overwritten successfully
---

Set the number of losses for the specified player. This function will overwrite the number of losses with the specified value.
