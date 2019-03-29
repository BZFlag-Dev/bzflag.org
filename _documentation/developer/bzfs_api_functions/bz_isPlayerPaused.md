---
since: 2.4.0
category: Player State
signatures:
    - - dataType: int
        description: The id of the player to check
        name: playerID
        default: ~
returns:
    dataType: bool
    description: True if the player specified is paused
---

Check if a given player is currently paused.
