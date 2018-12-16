---
dataType:
    current: bz_AllowServerShotFiredEventData_V1
    since: 2.4.14
    legacy: ~
category: Shots
plugins: ~
parameters:
    - dataType: bool
      description: True to allow a server shot to be fired
      name: allow
    - dataType: bool
      description: Set this to true if you'd like to change the `flagType` of the server shot
      name: changed
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

This event is called before a world weapon is fired. This event can disallow a world weapon from firing and it can change the shot type, similar to bz_eShotFiredEvent.
