---
dataType: bz_FlagTransferredEventData_V1
since: 2.4.0
plugins:
  - customflagsample
  - thiefControl
parameters:
  - dataType: int
    description: The ID of the player that stole the flag
    name: fromPlayerID
  - dataType: int
    description: The ID of the player whose flag was stolen
    name: toPlayerID
  - dataType: const char*
    description: The flag code of the stolen flag
    name: flagType
  - dataType: enum
    description: "Action The action taken for the transfer. Values: ContinueSteal, CancelSteal, DropThief"
    name: action
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a player with Thief steals a flag
