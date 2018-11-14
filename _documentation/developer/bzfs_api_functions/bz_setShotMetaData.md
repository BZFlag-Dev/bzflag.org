---
since: 2.4.14
category: Shot Management
signatures:
  -
    - dataType: const uint32_t
      name: shotGUID
      description: The GUID of the shot to set metadata for
      default: ~
    - dataType: const char*
      name: name
      description: The unique key this metadata value will be stored under
      default: ~
    - dataType: uint32_t
      name: value
      description: The value that will be stored
      default: ~
  -
    - dataType: const uint32_t
      name: shotGUID
      description: The GUID of the shot to set metadata for
      default: ~
    - dataType: const char*
      name: name
      description: The unique key this metadata value will be stored under
      default: ~
    - dataType: const char*
      name: value
      description: The value that will be stored
      default: ~
returns:
  dataType: void
  description: ~
---

Set metadata associated with a shot.

If the shot does not exist, the function will do nothing. Setting data for a name on a shot that already exists will replace any existing information.
