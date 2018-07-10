---
since: 2.4.0
signatures:
  -
    - dataType: int
      description: The id of the player to get the callsign of
      name: playerID
      default: ~
returns:
  dataType: const char*
  description: The callsign of the player
---

Get the callsign of a player from a player ID.
