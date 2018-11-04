---
dataType: bz_NewNonPlayerConnectionEventData_V1
since: 2.4.0
category: Other
plugins: ~
parameters:
  - dataType: int
    description: The ID of the connection
    name: connectionID
  - dataType: void*
    description: The packet data
    name: data
  - dataType: unsigned int
    description: The size of the packet
    name: size
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time there is a connection to the server not from a player
