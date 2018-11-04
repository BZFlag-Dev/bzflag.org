---
since: 2.4.4
category: Player Score
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose losses are being modified
      default: ~
    - dataType: int
      name: increment
      description: The number by which to increment the number of losses by
      default: ~
returns:
  dataType: void
  description: ~
---

Increment the number of losses for a player. Use a negative number to decrement the number of losses instead.
