---
since: 2.4.0
signatures:
  - []
returns:
  dataType: bz_APIFloatList*
  description: A pointer to the allocated list
---

{% from '_includes/api_utils.html.twig' import api_object %}

> To safely work with STL objects across the DLL boundary, a bz_APIFloatList* owned by the BZFS process is used to share data between plug-ins and BZFS.

Create an API-safe vector to hold floats when working with API functions. When you are done using the list, be sure to free the allocated memory by calling {{ api_object('bz_deleteFloatList') }}.
