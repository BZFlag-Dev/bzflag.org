---
since: 2.4.4
signatures:
  -
    - dataType: int
      description: The id of the player to check
      name: playerID
      default: ~
returns:
  dataType: bool
  description: True if the player specified has the ability to spawn.
---

Checks if player has the ability to spawn. This is not to be confused with the SPAWN permission but instead, this should be used together with [bz_setPlayerSpawnable]({{ url(collections['bzfs_api_functions']['bz_setPlayerSpawnable']) }}).
