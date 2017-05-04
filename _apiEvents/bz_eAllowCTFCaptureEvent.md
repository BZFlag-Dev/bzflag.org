---
dataType: bz_AllowCTFCaptureEventData_V1
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
  - dataType: double
    description: The server time at which the event occurred (in seconds).
    name: eventTime
---

This event is called each time a team flag is about to be captured. By setting `allow` to false, the capture event will not occur.
