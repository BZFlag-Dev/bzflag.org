---
dataType: bz_TeamScoreChangeEventData_V1
since: 2.4.0
plugins: ~
parameters:
  - dataType: bz_eTeamType
    description: The team that had a change of score.
    name: team
  - dataType: bz_eScoreElement
    description: The type of score that is being changed.
    name: element
  - dataType: int
    description: The new amount of element score the team has.
    name: thisValue
  - dataType: int
    description: The old amount of element score the team had.
    name: lastValue
  - dataType: double
    description: Time local server time for the event.
    name: eventTime
---

This event is called when a team's score changes
