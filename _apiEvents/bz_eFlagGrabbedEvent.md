---
dataType: bz_FlagGrabbedEventData_V1
parameters:
  - dataType: int
    description: The player that grabbed the flag
    name: playerID
  - dataType: int
    description: The flag ID that was grabbed
    name: flagID
  - dataType: bz_ApiString
    description: The flag abbreviation of the flag that was grabbed
    name: flagType
  - dataType: float[3]
    description: The position at which the flag was grabbed
    name: pos
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a flag is grabbed by a player
