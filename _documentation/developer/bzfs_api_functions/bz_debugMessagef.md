---
since: 2.4.0
category: Server Debugging
signatures:
    - - dataType: int
        name: debugLevel
        description: The debug level to output.
        default: ~
      - dataType: const char*
        name: fmt
        description: The message to output as debug message.
        default: ~
      - dataType: ...
        description: ~
        hide: true
returns:
    dataType: void
    description: ~
---

Sends formatted debug message at specified debug level. 

**Notes**

- If debug level is set to `0`, debug messages will appear regardless of debug settings. 
- Otherwise they will appear at or below the specified debug level.
