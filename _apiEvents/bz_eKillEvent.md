---
dataType: bz_KillEventData_V1
parameters:
  - dataType: int
    description: The ID of the player who sent the /kill command
    name: killerID
  - dataType: int
    description: The ID of the player who was killed
    name: killedID
  - dataType: bz_ApiString
    description: The reason (sent to killed player).
    name: reason
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is triggered when a player sends the /kill Slash Command to kill another player
