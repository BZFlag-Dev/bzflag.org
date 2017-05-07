---
dataType: bz_GameStartEndEventData_V1
since: 2.4.0
plugins:
  - HoldTheFlag
  - TimeLimit
  - nagware
  - recordmatch
parameters:
  - dataType: double
    description: The duration (in seconds) of the game.
    name: duration
  - dataType: double
    description: The server time the event occurred (in seconds).
    name: eventTime
---

This event is called each time a game ends
