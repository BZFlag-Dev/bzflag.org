---
since: 2.4.0
category: Flag Management
signatures:
    - - dataType: bool
        name: onlyUnused
        description: Only reset flags that aren't being carried
        default: ~
      - dataType: bool
        name: keepTeamFlags
        description: Do not reset team flags
        default: false
returns:
    dataType: void
    description: ~
---

Force all flags to be reset and respawned.
