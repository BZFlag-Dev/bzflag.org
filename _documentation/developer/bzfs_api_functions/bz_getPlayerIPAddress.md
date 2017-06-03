---
since: 2.4.0
group: Player Information
signatures:
  -
    - dataType: int
      description: The id of the player to get the IP address of
      name: playerID
      default: ~
returns:
  dataType: const char*
  description: The IP address of the player
---

Get the IP address of a player from a player ID.
