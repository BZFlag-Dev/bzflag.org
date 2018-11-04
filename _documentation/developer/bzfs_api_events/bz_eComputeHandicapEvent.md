---
dataType: bz_ComputeHandicap_V1
since: 2.4.12
category: Handicap
plugins: ~
parameters:
  - dataType: int
    description: The ID of the player whose handicap value is being calculated
    name: playerID
  - dataType: int
    description: The handicap value for the target player
    name: desiredHandicap
  - dataType: double
    description: The server time at which the event occurred (in seconds).
    name: eventTime
---

This event is called each time the handicap for a player is being calculated. By setting `desiredHandicap` in your plug-in, you can override the value and calculate the handicap however you'd like.

This event will only occur if the `-handicap` option is set for BZFS.
