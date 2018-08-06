---
since: 2.4.0
signatures:
  -
    - dataType: int
      name: flagID
      description: The ID of the flag to reset
      default: ~
returns:
  dataType: bool
  description: Returns true if the flag was successfully reset
---

Reset a flag based on their ID. If a player is currently carrying this flag, it will be dropped and then reset.
