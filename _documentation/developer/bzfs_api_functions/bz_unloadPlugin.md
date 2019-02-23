---
since: 2.4.0
category: Plug-in Management
signatures:
    - - dataType: const char*
        name: path
        description: Path to the plug-in to be unloaded.
        default: ~
returns:
    dataType: bool
    description: "`true` if it succeeded, `false` if it didn't."
---

Unloads a plug-in based on arguments provided.
