---
since: 2.4.0
category: Player Latency
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose jitter to get
      default: ~
returns:
  dataType: int
  description: The player's jitter
---

Get the amount of jitter a player has.
