---
since: 2.4.0
category: Server Management
signatures:
    - []
returns:
    dataType: void
    description: ~
---

Perform a server and map reload, without a full shutdown of the server executable. None of the plug ins are unloaded and the server will not be delisted from the list server. The following actions will be performed:

- kick all players
- stop any countdowns
- stop any recordings
- unload the world
- reload the world
- resets all flags
