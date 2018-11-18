---
dataType: bz_MuteEventData_V1
since: 2.4.12
category: Administrative
plugins: ~
parameters:
    - dataType: int
      description: The ID of the player who was muted.
      name: victimID
    - dataType: int
      description: The ID of the player who executed the /mute command.
      name: muterID
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is triggered when a player is muted
