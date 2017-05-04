---
dataType: bz_MsgDebugEventData_V1
plugins: ~
parameters:
  - dataType: char[2]
    description: A 2-byte message code to identify what the data is.
    name: code
  - dataType: size_t
    description: The size of the incoming message.
    name: len
  - dataType: char*
    description: The actual message telling the server what the data contains, based on the code data.
    name: msg
  - dataType: bool
    description: Whether or not to receive the packets
    name: receive
  - dataType: int
    description: The player that sent the data.
    name: playerID
  - dataType: double
    description: The current server time
    name: eventTime
---

This event is called every time packets are sent to the server
