---
dataType: bz_AllowFlagGrabData_V1
plugins:
  - fairCTF
  - regFlag
parameters:
  - dataType: int
    description: The ID of the player who is grabbing the flag
    name: playerID
  - dataType: int
    description: The ID of the flag that is going to be grabbed
    name: flagID
  - dataType: const char*
    description: The type of the flag about to be grabbed
    name: flagType
  - dataType: bool
    description: Whether or not to allow the flag grab
    name: allow
  - dataType: double
    description: The server time at which the event occurred (in seconds).
    name: eventTime
---

This event is called each time a player attempts to grab a flag. By setting `allow` to false, the player will not be able to grab the flag.
