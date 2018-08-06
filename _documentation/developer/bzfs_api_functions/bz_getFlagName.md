---
since: 2.4.4
signatures:
  -
    - dataType: int
      name: flagID
      description: The ID of a flag
      default: ~
returns:
  dataType: bz_ApiString
  description: The flag abbreviation
---

Get the flag abbreviation from a flag ID.

Prior to 2.4.4, this function was available as `bz_getName()` but has been deprecated since the new name.
