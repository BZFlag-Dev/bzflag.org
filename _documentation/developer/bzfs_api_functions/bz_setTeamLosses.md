---
since: 2.4.0
category: Team Management
signatures:
    - - dataType: bz_eTeamType
        name: team
        description: The team to set the new number of losses for
        default: ~
      - dataType: int
        name: losses
        description: The new number of losses
returns:
    dataType: void
    description: ~
---

Set a new value for the amount of losses a team has. This function will overwrite the number of team losses with the specified value.
