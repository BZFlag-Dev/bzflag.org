---
since: 2.4.0
category: Map Management
signatures:
    - - dataType: float
        name: size
        description: ~
        default: ~
      - dataType: float
        name: wallHeight
        description: ~
        default: ~
returns:
    dataType: bool
    description: ~
---

Set the world boundary size when generating a map via the plug-in API. This function will **only** have an effect when called before the world is defined in BZFS. 
