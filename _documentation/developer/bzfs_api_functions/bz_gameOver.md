---
since: 2.4.0
category: Server Management
signatures:
  -
    - dataType: int
      name: playerID
      description: The player ID who won the game
      default: ~
    - dataType: bz_eTeamType
      name: team
      description: The team that wins the game, regardless of the player ID
      default: eNoTeam
returns:
  dataType: void
  description: ~
---

Causes a "Game Over", announcing the player and/or team specified as the winner.

**Notes**

- By default the `team` value is `eNoTeam`, which makes the team of the player that was specified as the winner. If set to any other bz_eTeamType enumeration, it will announce that the specified color team won even if the player specified is on a different team.
