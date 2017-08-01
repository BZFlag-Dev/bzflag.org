---
since: 2.4.0
constructor:
  - []
operators: []
attributes:
  - 
    dataType: int
    name: version
    description: The version number of this API class
  - 
    dataType: int
    name: playerID 
    description: The player ID for the player.
  -
    dataType: bz_ApiString 
    name: callsign 
    description: The username/callsign for the player.
  -
    dataType: bz_eTeamType 
    name: team 
    description: The team the player is currently on.
  -
    dataType: bz_ApiString 
    name: ipAddress 
    description: The Internet Protocol v4 address of the connected client
  -
    dataType: int 
    name: currentFlagID
    description: The ID of the flag the player is carrying
  -
    dataType: bz_ApiString 
    name: currentFlag 
    description: The flag abbreviation of the flag the player is carrying
  -
    dataType: bz_APIStringList 
    name: flagHistory 
    description: A list of strings representing the names of all the flags the player has held, in order from newest to oldest.
  -
    dataType: float 
    name: lastUpdateTime 
    description: The server time of the last player update
  -
    dataType: bz_PlayerUpdateState 
    name: lastKnownState 
    description: The state record that was last sent
  -
    dataType: bz_ApiString
    name: clientVersion
    description: The version string of the player's BZFlag client
  -
    dataType: bool 
    name: spawned 
    description: True if the user has spawned and is playing.
  -
    dataType: bool 
    name: verified 
    description: True if the user has authenticated with the login system. Comparable to a user having a "+" in the scoreboard.
  -
    dataType: bool 
    name: globalUser 
    description: True if the user name was authenticated using the global login system as opposed to a local one.
  -
    dataType: bz_ApiString 
    name: bzID 
    description: The globally unique ID for authenticated users.
  -
    dataType: bool 
    name: admin 
    description: Is true by default if user has the BAN permission. Sets the "@" sign.
  -
    dataType: bool 
    name: op 
    description: True if the user is identified as a server operator via /password
  -
    dataType: bool 
    name: canSpawn
    description: True if the player is allowed to spawn
  -
    dataType: bz_APIStringList 
    name: groups 
    description: The list of groups the user is a member of
  -
    dataType: int 
    name: lag 
    description: The user's current lag amount in milliseconds.
  -
    dataType: int 
    name: jitter 
    description: The user's current jitter amount in milliseconds.
  -
    dataType: float 
    name: packetloss 
    description: The user's current packet loss percentage.
  -
    dataType: float
    name: rank
    description: The player's ranking approximated as wins divided by the sum of wins and losses
  -
    dataType: int 
    name: wins 
    description: The number of kills the user has had.
  -
    dataType: int 
    name: losses 
    description: The number of deaths the user has had
  -
    dataType: int 
    name: teamKills 
    description: The number of team mates the user has killed.
  -
    dataType: bz_ApiString
    name: motto 
    description: The player's motto; available in bz_PlayerRecordV2
functions:
  - 
    returnType: void
    description: Update the record with the latest player information
    name: update
    params: ~
  -
    returnType: bool
    description: Check if a player has the given permission
    name: hasPerm
    params:
      -
        dataType: const char*
        description: The permission to check
        name: perm
  -
    returnType: bool
    description: Grant the given player a permission
    name: grantPerm
    params:
      -
        dataType: const char*
        description: The permission to grant
        name: perm
  -
    returnType: bool
    description: Revoke a permission from the given player
    name: revokePerm
    params:
      -
        dataType: const char*
        description: The permission to revoke
        name: perm
---

The bz_BasePlayerRecord is an API class that is provided to expose information about a connected player to the plug-in.
