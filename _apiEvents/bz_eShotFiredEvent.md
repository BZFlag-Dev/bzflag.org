---
dataType: bz_ShotFiredEventData_V1
since: 2.4.0
plugins:
  - customflagsample
parameters:
  - dataType: int
    description: ID of the player that fired the shot
    name: playerID
  - dataType: bool
    description: Whether or not the shot has been modified. Shot type will not change unless this is set to 1 (true).
    name: changed
  - dataType: float[3]
    description: Where the shot was fired
    name: pos
  - dataType: bz_ApiString
    description: The shot type. This is the abbreviation, such as "PZ" or "SW"
    name: type
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a shot is fired
