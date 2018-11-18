---
since: 2.4.0
category: API Lists
signatures:
    - - dataType: bz_APIFloatList*
        name: list
        description: The list to delete
returns:
    dataType: void
    description: ~
---

> To safely work with STL objects across the DLL boundary, a bz_APIFloatList\* owned by the BZFS process is used to share data between plug-ins and BZFS.

Delete a float list that was allocated by BZFS.
