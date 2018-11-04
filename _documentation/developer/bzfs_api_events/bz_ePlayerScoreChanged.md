---
dataType: bz_PlayerScoreChangeEventData_V1
since: 2.4.0
category: Score
plugins: ~
parameters:
  - dataType: int
    description: Player that has had a change of score.
    name: playerID
  - dataType: bz_eScoreElement
    description: The type of score that is being changed.
    name: element
  - dataType: int
    description: The new amount of element score the playerID has.
    name: thisValue
  - dataType: int
    description: The old amount of element score the playerID had.
    name: lastValue
  - dataType: double
    description: Time local server time for the event.
    name: eventTime
---

This event is called when a player's score changes
