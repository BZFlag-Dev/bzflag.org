---
dataType: bz_PlayerJoinPartEventData_V1
parameters:
  - dataType: int
    description: The player ID that is leaving
    name: playerID
  - dataType: bz_BasePlayerRecord*
    description: The player record for the leaving player
    name: record
  - dataType: bz_ApiString
    description: The reason for leaving, such as a kick or a ban
    name: reason
  - dataType: double
    description: Time of event.
    name: eventTime
---

This event is called each time a player leaves a game
