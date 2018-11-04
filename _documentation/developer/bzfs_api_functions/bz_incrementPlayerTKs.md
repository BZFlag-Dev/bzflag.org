---
since: 2.4.4
category: Player Score
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose team kills are being modified
      default: ~
    - dataType: int
      name: increment
      description: The number by which to increment the number of team kills by
      default: ~
returns:
  dataType: void
  description: ~
---

Increment the number of team kills for a player. Use a negative number to decrement the number of team kills instead.
