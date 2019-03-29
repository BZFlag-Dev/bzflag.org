---
dataType:
    current: bz_SlashCommandEventData_V2
    since: 2.4.14
    legacy:
        - dataType: bz_SlashCommandEventData_V1
          since: 2.4.0
category: Slash Commands
plugins:
    - logDetail
parameters:
    - dataType: int
      description: The player who sent the slash command
      name: from
    - dataType: bz_ApiString
      description: The full text of the chat message for the slash command, containing the command and all associated parameters
      name: message
    - dataType: int
      description: The channel ID of where the slash command was sent to. 
      name: sourceChannel
      since: V2
    - dataType: double
      description: The local server time of the event
      name: eventTime
---

This event is called each time a player sends a slash command.

If `sourceChannel` value is between `0` and `243`, then the slash command was sent to a player ID. Otherwise, constants are available for determining the target channel of the slash command:

- `BZ_PUBLICCHAT`
- `BZ_ADMINCHAT`
- `BZ_ROGUECHAT`
- `BZ_REDCHAT`
- `BZ_GREENCHAT`
- `BZ_BLUECHAT`
- `BZ_PURPLECHAT`
- `BZ_OBSERVERCHAT`
- `BZ_RABBITCHAT`
- `BZ_HUNTERCHAT`
