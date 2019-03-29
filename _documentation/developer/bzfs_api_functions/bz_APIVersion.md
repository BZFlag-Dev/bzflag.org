---
since: 2.4.0
category: API Versioning
signatures:
    - []
returns:
    dataType: int
    description: BZAPI version.
---

The internal API version is used by bzfs so it can safely fail to load plugins that were compiled with older versions of bzfs that had a different API version. This value is only changed during protocol breaks or when something changes in the API such as the signature for an existing function or properties of API objects.

Most plug-ins won't have the need to make use of this information.
