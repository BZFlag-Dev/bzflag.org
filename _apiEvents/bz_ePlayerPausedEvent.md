---
dataType: bz_PlayerPausedEventData_V1
since: 2.4.0
plugins:
  - keepaway
  - koth
parameters:
  - dataType: int
    description: ID of the player who paused.
    name: playerID
  - dataType: bool
    description: Whether the player is pausing (true) or unpausing (false)
    name: pause
  - dataType: double
    description: Time local server time for the event.
    name: eventTime
---

This event is called each time a playing tank is paused
