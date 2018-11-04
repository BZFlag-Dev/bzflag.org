---
dataType: bz_GetWorldEventData_V1
since: 2.4.0
category: World
plugins:
  - pushstats
parameters:
  - dataType: bool
    description: The value representing the state of the world generation. If another
    name: generated
  - dataType: bool
    description: This value represents the game state being a Capture the Flag (CTF) type
    name: ctf
  - dataType: bool
    description: This value represents the game state being a Rabbit Hunt type game.
    name: rabbit
  - dataType: bool
    description: This value represents the game state being a Free For All type game.
    name: openFFA
  - dataType: char*
    description: A pointer to a memory location from which to read the world stream.
    name: worldBlob
  - dataType: bz_ApiString
    description: The path to the map file that will be used when this event is completed.
    name: worldFile
  - dataType: double
    description: Local Server time of the event.
    name: eventTime
---

This event is called before the BZFS server defines the world
