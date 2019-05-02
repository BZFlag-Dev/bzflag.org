---
since: 2.4.0
category: Bans
signatures:
    - - dataType: int
        name: playerIndex
        description: ~
        default: ~
      - dataType: const char*
        name: reason
        description: ~
        default: ~
      - dataType: bool
        name: notify
        description: ~
        default: ~
returns:
    dataType: bool
    description: ~
---

Specified user is kicked with notification of reason being optional.