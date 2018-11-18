---
dataType: bz_GameStartEndEventData_V2
since: 2.4.0
category: Countdown Timer
plugins:
    - HoldTheFlag
    - nagware
    - recordmatch
parameters:
    - dataType: double
      description: The duration (in seconds) of the game.
      name: duration
    - dataType: int
      description: The player who started the /countdown. If no player is tied to this event, this defaults to -1
      name: playerID
    - dataType: bool
      description: Always false in the start event
      name: gameOver
    - dataType: double
      description: The server time the event occurred (in seconds).
      name: eventTime
---

This event is triggered when a timed game begins
