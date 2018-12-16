---
dataType:
    current: bz_GamePauseResumeEventData_V2
    since: 2.4.4
    legacy:
        - dataType: bz_GamePauseResumeEventData_V1
          since: 2.4.4
category: Countdown Timer
plugins: ~
parameters:
    - dataType: bz_ApiString
      description: The callsign of whoever triggered the event. By default, it's "SERVER".
      name: actionBy
    - dataType: int
      description: The ID of the player who triggered this action. By default, it's 253.
      name: playerID
      since: V2
    - dataType: double
      description: The server time the event occurred (in seconds).
      name: eventTime
---

This event is triggered when a timed game is paused
