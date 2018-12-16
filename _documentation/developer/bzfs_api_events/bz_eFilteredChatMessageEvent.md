---
dataType:
    current: bz_ChatEventData_V2
    since: 2.4.4
    legacy:
        - dataType: bz_ChatEventData_V1
          since: 2.4.0
category: Chat
plugins: ~
parameters:
    - dataType: int
      description: The player ID sending the message.
      name: from
    - dataType: int
      description: The player ID that the message is to if the message is to an individual, or a broadcast. If the message is a broadcast the id will be `BZ_ALLUSERS`.
      name: to
    - dataType: bz_eTeamType
      description: The team the message is for if it not for an individual or a broadcast. If it is not a team message the team will be eNoTeam.
      name: team
    - dataType: bz_ApiString
      description: The filtered final text of the message.
      name: message
    - dataType: bz_eMessageType
      description: The type of message being sent.
      name: messageType
      since: V2
    - dataType: double
      description: The time of the event.
      name: eventTime
---

This event is called for each chat message the server receives; after the server or any plug-ins have done filtering
