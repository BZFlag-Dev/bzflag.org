---
dataType: bz_NetTransferEventData_V1
since: 2.4.0
category: Logging
plugins: ~
parameters:
    - dataType: bool
      description: Whether data is sent or recieved
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
    - dataType: double
      description: The current server time
      name: eventData
---

This event is called each time net data is received
