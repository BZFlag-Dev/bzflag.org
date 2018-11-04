---
since: 2.4.4
category: Player Latency
signatures:
  -
    - dataType: int
      name: playerID
      description: The player whose idle time to get
      default: ~
returns:
  dataType: int
  description: The number of seconds a player has been idle. If the player ID does not exist or the player is an observer, it will return -1; otherwise it will return 0 if the player has not been idle.
---

Get the amount of time a player has been idle.
