---
since: 2.4.0
category: Bans
signatures:
    - - dataType: int
        name: playerIndex
        description: ~
        default: ~
      - dataType: const char*
        name: ip
        description: ~
        default: ~
      - dataType: int
        name: time
        description: ~
        default: ~
      - dataType: const char*
        name: reason
        description: ~
        default: ~
returns:
    dataType: bool
    description: ~
---

Bans the IP of the user `playerIndex` with `reason` and `duration`.
