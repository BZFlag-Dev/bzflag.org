---
since: 2.4.0
category: API Versioning
signatures:
    - []
returns:
    dataType: int
    description: BZAPI version.
---

Returns the BZAPI version (`BZ_API_VERSION`). It is used by bzfs so it can safely fail to load plug-ins compiled with an older version of bzfs.
