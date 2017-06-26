---
dataType: bz_AutoPilotData_V1
since: 2.4.12
plugins: ~
parameters:
  - dataType: int
    description: The ID of the player using autopilot
    name: playerID
  - dataType: bool
    description: True if autopilot is being turned out
    name: enabled
  - dataType: double
    description: The server time at which the event occurred (in seconds).
    name: eventTime
---

This event is called each time a player turns autopilot on or off.
