---
since: 2.4.6
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
  dataType: const char*
  description: The string metadata value stored for this shot
---

Get the string value stored in a shot's metadata.
