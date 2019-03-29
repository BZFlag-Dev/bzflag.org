---
since: 2.4.0
category: Team Management
signatures:
    - - dataType: bz_eTeamType
        name: team
        description: The team to get the player limit for
        default: ~
returns:
    dataType: unsigned int
    description: The player limit
---

Get the maximum number of players that the server is configured to allow for the specified team.
