---
dataType: bz_FlagDroppedEventData_V1
since: 2.4.0
category: Flags
plugins:
    - customflagsample
parameters:
    - dataType: int
      description: The player that dropped the flag
      name: playerID
    - dataType: int
      description: The flag ID that was dropped
      name: flagID
    - dataType: bz_ApiString
      description: The flag abbreviation of the flag that was grabbed
      name: flagType
    - dataType: float[3]
      description: The position at which the flag was dropped
      name: pos
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is called each time a flag is dropped by a player.
