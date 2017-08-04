---
since: 2.4.0
signatures:
  -
    - dataType: const char*
      name: group
      description: The group to grant the permission to
      default: ~
    - dataType: const char*
      name: perm
      description: The permission to grant
      default: ~
returns:
  dataType: bool
  description: Returns true if the group was given the perm successfully or already had the permission.
---

Grant a permission to a loaded user group.
