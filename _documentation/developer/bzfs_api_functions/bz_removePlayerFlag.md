---
since: 2.4.0
category: Flag Management
signatures:
    - - dataType: int
        name: playerID
        description: The player whose flag is to be removed
        default: ~
returns:
    dataType: bool
    description: True if the flag was removed successfully
---

Forcefully remove the flag a player is carrying.
