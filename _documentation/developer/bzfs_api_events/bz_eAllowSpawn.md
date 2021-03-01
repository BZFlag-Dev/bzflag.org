---
dataType:
    current: bz_AllowSpawnData_V2
    since: 2.4.4
    legacy:
        - dataType: bz_AllowSpawnData_V1
          since: 2.4.0
category: Player Spawns
plugins: ~
parameters:
    - dataType: int
      description: This value is the player ID for the joining player.
      name: playerID
    - dataType: bz_eTeamType
      description: The team the player belongs to.
      name: team
    - dataType: bool
      description: Whether or not the plugin will be handling the respawn or not.
      name: handled
    - dataType: bool
      description: Set to false if the player should not be allowed to spawn.
      name: allow
    - dataType: bool
      description: Set to false to prevent kicking the player for not being allowed to spawn.
      name: kickPlayer
      since: V2
    - dataType: bz_ApiString
      description: The logged reason the player is being kicked if `kickPlayer` is true.
      name: kickReason
      since: V2
    - dataType: bz_ApiString
      description: The message sent to the player that is not allowed to spawn if `allow` is false.
      name: message
      since: V2
    - dataType: double
      description: The server time the event occurred (in seconds.)
      name: eventTime
---

This event is called every time before a player spawns.

By setting `allow` to false, the player will be kicked when they try to spawn; this can be prevented by setting `kickPlayer` to false as well. It's recommended you let the player know _why_ they're not allowed to spawn.
