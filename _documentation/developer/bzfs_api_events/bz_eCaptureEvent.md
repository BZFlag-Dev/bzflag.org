---
dataType: bz_CTFCaptureEventData_V1
since: 2.4.0
category: Capture The Flag
plugins:
    - HoldTheFlag
    - Phoenix
    - timedctf
parameters:
    - dataType: bz_eTeamType
      description: The team whose flag was captured.
      name: teamCapped
    - dataType: bz_eTeamType
      description: The team who did the capturing.
      name: teamCapping
    - dataType: int
      description: The player who captured the flag.
      name: playerCapping
    - dataType: float[3]
      description: The world position(X,Y,Z) where the flag has been captured
      name: pos
    - dataType: float
      description: The rotational orientation of the capturing player
      name: rot
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is called each time a team's flag has been captured
