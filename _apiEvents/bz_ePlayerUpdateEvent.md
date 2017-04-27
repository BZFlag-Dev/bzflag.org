---
dataType: bz_PlayerUpdateEventData_V1
parameters:
  - dataType: int
    description: ID of the player that sent the update
    name: playerID
  - dataType: bz_PlayerUpdateState
    description: The original state the tank was in
    name: state
  - dataType: bz_PlayerUpdateState
    description: The second state the tank is currently in to show there was an update
    name: lastState
  - dataType: double
    description: The time the state was updated
    name: stateTime
  - dataType: double
    description: The current server time
    name: eventTime
---

This event is called each time a player sends an update to the server
