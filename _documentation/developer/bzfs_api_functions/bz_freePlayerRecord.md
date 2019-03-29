---
since: 2.4.0
category: Player Records
signatures:
    - - dataType: bz_BasePlayerRecord*
        description: The player record to free
        name: playerRecord
        default: ~
returns:
    dataType: void
    description: ~
---

Frees the player record specified. This should be called on each player record after it's no longer needed, to release the memory used by that player record.
