---
since: 2.4.0
signatures:
  -
    - dataType: bz_BasePlayerRecord*
      description: The player record to free
      name: playerRecord
      default: ~
returns:
  dataType: void
  description: ~
---

Updates the data in a bz_BasePlayerRecord to the current state of that player. The information in a base player record instance is not kept up-to-date as the game progresses, so this method must be called to get the most up-to-date information.
