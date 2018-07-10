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

Check if a given player has a permission.

This permission can be one of the default permissions provided by BZFS or it could be a custom one used by a plug-in.
