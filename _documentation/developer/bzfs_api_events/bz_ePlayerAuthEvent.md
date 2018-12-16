---
dataType:
    current: bz_PlayerAuthEventData_V1
    since: 2.4.0
    legacy: ~
category: Player
plugins:
    - logDetail
parameters:
    - dataType: int
      description: The ID of the player who's authorization changed
      name: playerID
    - dataType: bool
      description: (UNUSED) Value exists, however it is never set.
      name: password
    - dataType: bool
      description: (UNUSED) Value exists, however it is never set.
      name: globalAuth
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is triggered when a player's authorization status changes
