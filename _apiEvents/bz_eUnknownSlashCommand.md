---
dataType: bz_UnknownSlashCommandEventData_V1
plugins: ~
parameters:
  - dataType: int
    description: The player who sent the slash command
    name: from
  - dataType: bool
    description: The current state representing if the command has been handled by a previous plug-in.
    name: handled
  - dataType: bz_ApiString
    description: The full text of the chat message for the slash command, containing the command and all
    name: message
  - dataType: double
    description: The local server time of the event.
    name: eventTime
---

This event is called when the BZFS server does not have an installed handler for a specific slash command
