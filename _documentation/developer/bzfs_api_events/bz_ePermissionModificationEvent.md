---
dataType: bz_PermissionModificationData_V1
since: 2.4.14
plugins: ~
parameters:
  - dataType: int
    description: The ID of the player whose permissions were modified
    name: playerID
  - dataType: const char*
    description: The permission name that was modified in uppercase
    name: perm
  - dataType: bool
    description: Set to true if the permission was granted; false if it was revoked
    name: granted
  - dataType: bool
    description: Set to true if the permission is not part of the standard server permissions
    name: customPerm
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a player's permissions are modified by the API's `bz_grantPerm()` and `bz_revokePerm()` functions.
