---
since: 2.4.0
category: Flag Management
signatures:
  -
    - dataType: const char*
      name: abbr
      description: The desired flag abbreviation. Must be unique and be 1 or 2 characters
      default: ~
    - dataType: const char*
      name: name
      description: The desired flag name. Max length 32 characters
      default: ~
    - dataType: const char*
      name: helpString
      description: The desired help string. Max length 128 characters
      default: ~
    - dataType: bz_eShotType
      name: shotType
      description: The default shot type for the flag
      default: ~
    - dataType: bz_eFlagQuality
      name: quality
      description: The flag's quality (good/bad)
      default: ~
returns:
  dataType: bool
  description: If the flag was registered successfully.
---

Create a custom flag type with its behavior defined by a plug-in.

A few things to keep in mind:

- This function **must** be called inside a plug-in's `Init()` method and should be loaded at server startup so the custom flags can be used with `+f`, `-f`, and `-sl` bzfs options.
- The abbreviation of a custom flag may not conflict with an existing flag, whether built-in to bzfs or through another plug-in.
- Custom flags do not have any functionality. It is up to the plug-in to implement functionality based on events.
