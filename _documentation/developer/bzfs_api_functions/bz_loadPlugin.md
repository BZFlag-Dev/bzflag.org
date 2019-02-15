---
since: 2.4.0
category: Plug-in Management
signatures:
    - - dataType: const char*
        name: path
        description: Path to the plug-in to be loaded.
        default: ~
      - dataType: const char*
        name: params
        description: Parameters to be passed to the plug-in.
        default: ~
returns:
    dataType: bool
    description: `true` if it succeeded, otherwise `false`.
---

Loads a plug-in based on arguments provided. Returns `true` if successfully loaded, `false` if not.
