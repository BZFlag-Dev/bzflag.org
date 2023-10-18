---
since: 2.4.20
category: Flag Management
signatures:
    - - dataType: int
        name: flagID
        description: The ID of the flag to get a safety zone for
        default: ~
      - dataType: float
        name: 'pos[3]'
        description: A pointer
        default: ~
returns:
    dataType: bool
    description: ~
---

If a safety zone is found for a flag, then the coordinates within said safety zone are stored in the `pos` pointer. This function returns true if a safety zone was successfully found.
