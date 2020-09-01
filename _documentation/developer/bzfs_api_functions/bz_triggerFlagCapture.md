---
since: 2.4.12
category: Game Mode Management
signatures:
    - - dataType: int
        name: playerID
        description: Player capturing flag.
        default: ~
      - dataType: bz_eTeamType
        name: teamCapping
        description: Team capturing flag.
        default: ~
      - dataType: bz_eTeamType
        name: teamCapped
        description: Team whose flag was captured.
        default: ~
returns:
    dataType: bool
    description: Returns true if successful.
---

Triggers a team flag capture.
