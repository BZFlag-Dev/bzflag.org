---
dataType: bz_KickEventData_V1
since: 2.4.0
category: Administrative
plugins: ~
parameters:
  - dataType: int
    description: The ID of the player who performed the kick.
    name: kickerID
  - dataType: int
    description: The ID of the player being kicked from the server.
    name: kickedID
  - dataType: bz_ApiString
    description: The reason (sent to kicked player).
    name: reason
  - dataType: double
    description: The server time the event occurred (in seconds.)
    name: eventTime
---

This event is triggered when a player is kicked from the server
