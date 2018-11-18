---
since: 2.4.0
category: Chat Messages
signatures:
    - - dataType: int
        name: from
        description: From who the message will be
        default: ~
      - dataType: int
        name: to
        description: The player ID that will be receiving the message. To send messages to all players, use the `BZ_ALLUSERS` constant.
        default: ~
      - dataType: const char*
        name: fmt
        description: The message to send
        default: ~
      - dataType: ...
        description: Depending on `fmt`, the function may expect a sequence of additional arguments to replace a format specifier
        hide: true
    - - dataType: int
        name: from
        description: From who the message will be
        default: ~
      - dataType: bz_eTeamType
        name: to
        description: The team to send the message to
        default: ~
      - dataType: const char*
        name: fmt
        description: The message to send
        default: ~
      - dataType: ...
        description: Depending on `fmt`, the function may expect a sequence of additional arguments to replace a format specifier
        hide: true
returns:
    dataType: bool
    description: Returns false if the message failed to send
---

Send a formatted message to a player or team.

**Notes**

- For the `from` parameter, it is recommended to use the `BZ_SERVER` const; it is discouraged to send messages on behalf of players.
- You may also use the same receiving player ID as the sending player ID for it to appear as the player is messaging themselves.
