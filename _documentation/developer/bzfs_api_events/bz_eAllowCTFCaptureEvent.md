---
dataType: bz_AllowCTFCaptureEventData_V1
since: 2.4.0
category: Capture The Flag
plugins: ~
parameters:
    - dataType: int
      description: The ID of the player making the capture
      name: playerCapping
    - dataType: bz_eTeamType
      description: The team making the capture
      name: teamCapped
    - dataType: bz_eTeamType
      description: The team whose flag is being captured
      name: teamCapping
    - dataType: float[3]
      description: The position of the player
      name: pos
    - dataType: float
      description: The direction the player is
      name: rot
    - dataType: bool
      description: Whether or not to allow the capture
      name: allow
    - dataType: bool
      description: Whether or not tanks on the losing team should explode
      name: killTeam
    - dataType: double
      description: The server time at which the event occurred (in seconds)
      name: eventTime
---

This event is called each time a team flag is about to be captured. By setting `allow` to false, the capture event will not occur.

## Known Issues

- The `killTeam` boolean is broken in 2.4; this will be fixed in the 2.6 (see [issue #184](https://github.com/BZFlag-Dev/bzflag/issues/184))
