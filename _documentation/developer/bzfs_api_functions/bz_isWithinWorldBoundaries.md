---
since: 2.4.20
category: Spawn Management
signatures:
    - - dataType: float
        name: pos[3]
        description: The pointer to the position (X, Y, and Z) to check.
        default: ~
returns:
    dataType: bool
    description: True when the given position is within the world boundaries.
---

Check to see whether a specific point is inside the world's boundaries.
