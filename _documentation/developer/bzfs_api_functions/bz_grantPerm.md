---
since: 2.4.0
category: Player Permissions
signatures:
    - - dataType: int
        name: playerID
        description: The player ID for whom to give a permission to
        default: ~
      - dataType: const char*
        name: perm
        description: The permission to give
        default: ~
returns:
    dataType: bool
    description: True if the permission was given successfully
---

Grant a player a permission.

This permission can be one of the default permissions provided by BZFS or it could be a custom one used by a plug-in.
