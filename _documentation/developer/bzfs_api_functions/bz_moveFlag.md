---
since: 2.4.0
category: Flag Management
signatures:
    - - dataType: int
        name: flagID
        description: The ID of the flag to move
        default: ~
      - dataType: float
        name: 'pos[3]'
        description: The location of where to move the flag to
        default: ~
returns:
    dataType: bool
    description: Returns true if the flag exists or false if it does not exist
---

Move the specified flag to a new location. If a player is carrying the flag, it will be dropped and then moved.
