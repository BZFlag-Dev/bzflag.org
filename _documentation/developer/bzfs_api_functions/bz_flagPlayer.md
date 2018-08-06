---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: flagID
      description: The ID of the flag to get information about
      default: ~
returns:
  dataType: int
  descriptions: The ID of the player currently carrying this flag. Returns `-1` if no player is carrying this flag.
---

Get the ID of the player currently carrying this flag.
