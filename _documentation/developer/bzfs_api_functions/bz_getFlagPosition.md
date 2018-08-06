---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: flagID
      description: The ID of the flag to get information for
      default: ~
    - dataType: float
      name: "pos[3]"
      description: A pointer
      default: ~
returns:
  dataType: bool
  description: Returns false if the given flag ID was invalid
---

Get the position for a flag from its ID.

The `pos[3]` parameter is a pointer to a `float` array and the method will write to this pointer.
