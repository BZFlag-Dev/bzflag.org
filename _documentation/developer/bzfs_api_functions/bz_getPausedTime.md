---
since: 2.4.4
category: Player Latency
signatures:
    - - dataType: int
        name: playerID
        description: The player whose paused time to get
        default: ~
returns:
    dataType: int
    description: The number of seconds a player has been paused. If the player ID does not exist, it will return -1; otherwise it will return 0 if the player is not paused or is an observer.
---

Get the amount of time a player has been paused.
