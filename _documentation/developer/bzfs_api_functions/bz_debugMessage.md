---
since: 2.4.0
category: Server Debugging
signatures:
    - - dataType: int
        name: debugLevel
        description: The debug level to output.
        default: ~
      - dataType: const char*
        name: message
        description: The message to output as debug message.
        default: ~
returns:
    dataType: void
    description: ~
---

Sends debug message at specified debug level. 

**Notes**

- If debug level is set to `0`, debug messages will appear regardless of debug settings.
- Otherwise they will appear at or below the specified debug level.
