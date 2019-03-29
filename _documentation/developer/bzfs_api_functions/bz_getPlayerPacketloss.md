---
since: 2.4.0
category: Player Latency
signatures:
    - - dataType: int
        name: playerID
        description: The player whose packetloss to get
        default: ~
returns:
    dataType: float
    description: The player's packetloss
---

Get the amount of packetloss a player has.
