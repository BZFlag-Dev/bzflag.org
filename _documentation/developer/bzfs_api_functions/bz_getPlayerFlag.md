---
since: 2.4.0
group: Player Information
signatures:
  -
    - dataType: int
      description: The id of the player to get the current flag of
      name: playerID
      default: ~
returns:
  dataType: const char*
  description: The two-character flag ID of the flag that the given player is holding, or NULL if the player does not exist or is not currently holding a flag
---

Gets the flag the given player is currently holding, if any.
