---
since: 2.4.0
signatures:
  - 
    - dataType: bz_APIStringList*
      name: list
      description: The list to delete
returns:
  dataType: void
  description: ~
---

> To safely work with STL objects across the DLL boundary, a bz_APIStringList* owned by the BZFS process is used to share data between plug-ins and BZFS.

Delete a string list that was allocated by BZFS.
