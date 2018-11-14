---
since: 2.4.14
category: Shot Management
signatures:
  -
    - dataType: const uint32_t
      name: shotGUID
      description: The GUID of the shot to check metadata for
      default: ~
    - dataType: const char*
      name: name
      description: The unique key this metadata value that'll be searched for
      default: ~
returns:
  dataType: bool
  description: True if the shot has metadata associated with the given name
---

Check if a shot has metadata under a specific name.
