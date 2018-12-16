---
dataType:
    current: bz_AllowPlayerEventData_V1
    since: 2.4.0
    legacy: ~
category: Player
plugins: ~
parameters:
    - dataType: int
      description: This value is the player ID for the joining player.
      name: playerID
    - dataType: bz_ApiString
      description: This value is the callsign for the player.
      name: callsign
    - dataType: bz_ApiString
      description: This value is the IPv4 address of the player.
      name: ipAddress
    - dataType: bz_ApiString
      description: This value is the reason for any denials of admittance, it will be reported back to the player.
      name: reason
    - dataType: bool
      description: Whether or not to allow the player to join
      name: allow
    - dataType: double
      description: This value is the local server time of the event.
      name: eventTime
---

This event is called each time a player connects to the server. By setting `allow` to false, the player will be rejected and not allowed to join the server.
