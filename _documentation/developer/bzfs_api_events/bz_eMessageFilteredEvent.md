---
dataType:
    current: bz_MessageFilteredEventData_V1
    since: 2.4.0
    legacy: ~
category: Chat
plugins:
    - logDetail
parameters:
    - dataType: int
      description: The player who sent the filtered message
      name: player
    - dataType: bz_ApiString
      description: The unfiltered text of the message
      name: rawMessage
    - dataType: bz_ApiString
      description: The text of the message after passing through the filter
      name: filteredMessage
    - dataType: double
      description: The local server time at which the message was sent
      name: eventTime
---

This event is called whenever a message is censored by the swear filter
