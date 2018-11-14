---
since: 2.4.14
category: Shot Management
signatures:
  -
    - dataType: const uint32_t
      name: shotGUID
      description: The GUID of the shot to get metadata for
      default: ~
    - dataType: const char*
      name: name
      description: The unique key this metadata value
      default: ~
returns:
  dataType: uint32_t
  description: The integer metadata value stored for this shot
---

Get the integer value stored in a shot's metadata.
