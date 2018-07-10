---
since: 2.4.0
signatures:
  -
    - dataType: bz_eTeamType
      name: team
      description: The team to set the new number of wins for
      default: ~
    - dataType: int
      name: wins
      description: The new number of wins
returns:
  dataType: void
  description: ~
---

Set a new value for the amount of wins a team has. This function will overwrite the number of team wins with the specified value.
