---
dataType: bz_AllowPollEventData_V1
since: 2.4.10
category: Polls
plugins: ~
parameters:
  - dataType: int
    description: The player ID attempting to start a poll
    name: playerID
  - dataType: bz_ApiString
    description: The poll action that's occurring; e.g. kick, kill, ban, set, or a custom poll type
    name: pollAction
  - dataType: bz_ApiString
    description: The target of the poll; e.g. a player's callsign or a BZDB variable + value
    name: pollTarget
  - dataType: bool
    description: Setting to this false will disallow a poll from starting
    name: allow
  - dataType: bz_ApiString
    description: The message sent to the player as to why a poll was disallowed
    name: reason
  - dataType: double
    description: The time of the event.
    name: eventTime
---

This event is called before a poll begins.
