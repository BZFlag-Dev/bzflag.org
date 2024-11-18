---
dataType:
    current: bz_NetTransferEventData_V1
    since: 2.4.0
    legacy: ~
category: Logging
plugins: ~
parameters:
    - dataType: bool
      description: Whether data is sent or received
      name: send
    - dataType: bool
      description: Whether the packet is UDP
      name: udp
    - dataType: unsigned int
      description: Size of the packet
      name: iSize
    - dataType: unsigned char*
      description: The packet data
      name: data
    - dataType: int
      description: The ID of the player this data is relating to
      name: playerID
    - dataType: double
      description: The current server time
      name: eventTime
---

This event is called each time net data is sent.
