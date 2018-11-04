---
dataType: bz_ShotEndedEventData_V1
since: 2.4.0
category: Shots
plugins: ~
parameters:
  - dataType: int
    description: The player ending the shot
    name: playerID
  - dataType: int
    description: The shot ID
    name: shotID
  - dataType: bool
    description: Whether the shot exploded or not
    name: explode
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a shot ends
