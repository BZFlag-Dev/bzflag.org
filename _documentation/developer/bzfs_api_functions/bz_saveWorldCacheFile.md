---
since: 2.4.0
category: World Management
signatures:
    - - dataType: const char*
        name: file
        description: Path and file name to save the cache file to
        default: ~
returns:
    dataType: bool
    description: True if the write was sucsessfull, or false if there was an error
---

Have the server save out a world cache file to the specified file.
