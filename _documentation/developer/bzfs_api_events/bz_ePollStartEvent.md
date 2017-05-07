---
dataType: bz_PollStartEventData_V1
since: 2.4.10
plugins: ~
parameters:
  - dataType: int
    description: The player ID who started the poll
    name: playerID
  - dataType: bz_ApiString
    description: The poll action that's occurring; e.g. kick, kill, ban, set, or a custom poll type
    name: pollAction
  - dataType: bz_ApiString
    description: The target of the poll; e.g. a player's callsign or a BZDB variable + value
    name: pollTarget
  - dataType: double
    description: The time of the event.
    name: eventTime
---

This event is called at the start of a poll
