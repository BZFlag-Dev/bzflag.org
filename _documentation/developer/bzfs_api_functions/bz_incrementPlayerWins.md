---
since: 2.4.4
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose wins are being modified
      default: ~
    - dataType: int
      name: increment
      description: The number by which to increment the number of wins by
      default: ~
returns:
  dataType: void
  description: ~
---

Increment the number of wins for a player. Use a negative number to decrement the number of wins instead.
