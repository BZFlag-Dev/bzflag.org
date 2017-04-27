---
dataType: bz_ListServerUpdateEvent_V1
parameters:
  - dataType: bz_ApiString
    description: The public address of the server, as specified with the `-publicaddr` command-line option.
    name: address
  - dataType: bz_ApiString
    description: The public description of the server, as specified with the `-publictitle` command-line option.
    name: description
  - dataType: bz_ApiString
    description: The groups the server will be advertised to, as specified with the `-advertise` command-line option.
    name: groups
  - dataType: bool
    description: Whether or not the plug-in will override the values
    name: handled
  - dataType: double
    description: The server time the event occurred (in seconds.)
    name: eventTime
---

This event is called before the server adds itself to the list server
