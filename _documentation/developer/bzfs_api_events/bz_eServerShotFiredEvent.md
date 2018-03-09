---
dataType: bz_ServerShotFiredEventData_V1
since: 2.4.14
plugins: ~
parameters:
  - dataType: uint32_t
    description: The GUID of the shot that was fired
    name: guid
  - dataType: bz_ApiString
    description: The flag abbreviation of the shot type that was fired
    name: flagType
  - dataType: float
    description: The speed of the shot fired
    name: speed
  - dataType: float[3]
    description: The position of where the shot was fired (x, y, z coordinates)
    name: pos
  - dataType: float[3]
    description: The vector of the shot's direction multiplied by the shot's speed
    name: velocity
  - dataType: bz_eTeamType
    description: The team this shot belongs to
    name: team
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a world weapon is fired
