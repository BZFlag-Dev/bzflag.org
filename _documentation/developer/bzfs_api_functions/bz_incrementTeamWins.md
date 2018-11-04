---
since: 2.4.4
category: Team Management
signatures:
  -
    - dataType: bz_eTeamType
      name: team
      description: The team whose wins will be modified
      default: ~
    - dataType: int
      name: increment
      description: The number by which to increment the team wins
returns:
  dataType: void
  description: ~
---

Increment the number of wins for a team. Use a negative number to decrement the number of team wins instead.
