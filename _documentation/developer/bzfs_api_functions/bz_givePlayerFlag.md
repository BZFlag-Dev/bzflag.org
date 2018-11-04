---
since: 2.4.0
category: Flag Management
signatures:
  -
    - dataType: int
      name: playerID
      description: The player that is to get the flag
      default: ~
    - dataType: const char*
      name: flagType
      description: The flag abbreviation of the flag to give to the player
      default: ~
    - dataType: bool
      name: force
      description: When set to true, take the flag from another player and give it to this player instead
      default: ~
returns:
  dataType: bool
  description: True if the flag was given successfully to the player
---

Give the specified player a flag. If the player already has a flag, it will be taken and they will receive a new one.
