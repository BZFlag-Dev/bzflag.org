---
since: 2.4.0
category: Player Information
signatures:
  -
    - dataType: int
      description: The id of the player to get the team of
      name: playerID
      default: ~
returns:
  dataType: bz_eTeamType
  description: The team the player is currently a part of
---

Get the playable team the player is currently on meaning a value of `eAdministrators` would not be returned.
