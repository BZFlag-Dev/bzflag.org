---
dataType: bz_GetPlayerMottoData_V2
since: 2.4.4
plugins: ~
parameters:
  - dataType: bz_ApiString
    description: The motto of the joining player. This value may ve overwritten to change the motto of a player.
    name: motto
  - dataType: bz_BasePlayerRecord
    description: The player record for the player using the motto.
    name: record
  - dataType: double
    description: The server time the event occurred (in seconds).
    name: eventTime
---

This event is called when the player joins. It gives us the motto of the player
