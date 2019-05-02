---
since: 2.4.0
category: Bans
signatures:
    - - dataType: const char*
        name: hostmask
        description: ~
        default: ~
      - dataType: const char*
        name: source
        description: ~
        default: ~
      - dataType: int
        name: duration
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

Bans the host of specified user for the `duration` and `reason` provided.