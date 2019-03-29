---
dataType:
    current: bz_GameStartEndEventData_V2
    since: 2.4.4
    legacy:
        - dataType: bz_GameStartEndEventData_V1
          since: 2.4.0
category: Countdown Timer
plugins:
    - HoldTheFlag
    - TimeLimit
    - nagware
    - recordmatch
parameters:
    - dataType: double
      description: The duration (in seconds) of the game.
      name: duration
    - dataType: int
      description: The player who triggered the event. If it was triggered automatically, this value will be the server ID (253)
      name: playerID
      since: V2
    - dataType: bool
      description: Set to true if the game was ended with `/gameover` or `/superkill` or via the API
      name: gameOver
      since: V2
    - dataType: double
      description: The server time the event occurred (in seconds).
      name: eventTime
---

This event is called each time a game ends
