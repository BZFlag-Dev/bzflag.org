---
since: 2.4.4
category: Shot Management
signatures:
    - - dataType: int
        name: fromPlayer
        description: The player ID who fired the shot
        default: ~
      - dataType: int
        name: shotID
        description: The local shot ID relative to the player
        default: ~
returns:
    dataType: uint32_t
    description: The GUID for the shot; 0 if the shot does not exist
---

Get the globally unique identifier (GUID) for the specified shot.

Shot GUIDs are unique to each shot fired (within a range of over 4 billion shots fired per server session). This ID can be useful to detect unique shots independent of player reload timers.
