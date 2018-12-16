---
dataType:
    current: bz_GetPlayerInfoEventData_V1
    since: 2.4.0
    legacy: ~
category: Player
plugins:
    - superUser
parameters:
    - dataType: int
      description: The playerID the record refers too.
      name: playerID
    - dataType: bz_ApiString
      description: The callsign for the player.
      name: callsign
    - dataType: bz_ApiString
      description: The IPv4 address for the player. (not set in 2.4.0, fixed in 2.4.1.)
      name: ipAddress
    - dataType: bz_eTeamType
      description: The team the player is current only.
      name: team
    - dataType: bool
      description: The admin permision state of the player, indicating if they will be displayed with an '@' symbol in the scoreboard.
      name: admin
    - dataType: bool
      description: The authentication state of the player, indicating if they will be displayed with an '+' symbol in the scoreboard.
      name: verified
    - dataType: bool
      description: The state of the player's username. This value is true if the username is registered.
      name: registered
    - dataType: double
      description: The local server time of the event.
      name: eventTime
---

This event is called each time the server sends out a player info update message to a remote player
