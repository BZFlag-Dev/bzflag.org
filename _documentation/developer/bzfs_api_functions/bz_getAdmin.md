---
since: 2.4.0
group: Player Information
signatures:
  -
    - dataType: int
      description: The id of the player to check
      name: playerID
      default: ~
returns:
  dataType: bool
  description: True if the player specified has the permission specified
---

Check if a given player is an administrator, defined by having the ability to use the `/ban` command.
