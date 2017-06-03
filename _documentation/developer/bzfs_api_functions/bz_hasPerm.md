---
since: 2.4.0
signatures:
  -
    - dataType: int
      description: The id of the player to check
      name: playerID
      default: ~
    - dataType: const char*
      description: The name of the permission to check for
      name: perm
      default: ~
returns:
  dataType: bool
  description: True if the player specified has the permission specified
---

Check if a given player has a permission, whether it be defined by BZFS or a custom permission defined by plug-ins.
