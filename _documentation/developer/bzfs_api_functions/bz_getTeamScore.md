---
since: 2.4.0
category: Team Management
signatures:
  -
    - dataType: bz_eTeamType
      name: team
      description: The team to get the current score for
      default: ~
returns:
  dataType: int
  description: The current score of the team
---

Get the current score (wins minus loses) of the specified team.
