---
since: 2.4.0
category: Player Permissions
signatures:
  -
    - dataType: const char*
      name: passwd
      description: The password to check
      default: ~
returns:
  dataType: bool
  description: True if the given password was correct
---

Check whether a given string is a valid server password (the -passwd BZFS option).
