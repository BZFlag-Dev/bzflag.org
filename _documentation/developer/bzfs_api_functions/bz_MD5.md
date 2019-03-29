---
since: 2.4.0
category: String Operations
signatures:
    - - dataType: const char*
        name: str
        description: String to be hashed.
        default: ~
returns:
    dataType: const char*
    description: The MD5 hash of `str`.
---

Creates an MD5 hash of the `str` argument provided.
