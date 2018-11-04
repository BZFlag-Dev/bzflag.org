---
dataType: bz_ServerMsgEventData_V1
since: 2.4.0
category: Chat
plugins:
  - logDetail
parameters:
  - dataType: int
    description: ID of the player receiving the message
    name: to
  - dataType: bz_eTeamType
    description: The team/group receiving the message
    name: team
  - dataType: bz_ApiString
    description: The message text
    name: message
  - dataType: double
    description: Time local server time for the event.
    name: eventTime
---

This event is called each time the server sends a message
