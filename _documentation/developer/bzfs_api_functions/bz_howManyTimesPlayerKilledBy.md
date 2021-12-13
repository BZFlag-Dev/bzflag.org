---
since: 2.4.0
category: Player Score
signatures:
    - - dataType: int
        name: playerId
        description: ~
        default: ~
      - dataType: int
        name: killerId
        description: ~
        default: ~
returns:
    dataType: int
    description: ~
---

Get the number of times `playerId` has been killed by `killerId`.
