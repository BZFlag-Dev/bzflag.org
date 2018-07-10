---
since: 2.4.0
signatures:
  - []
returns:
  dataType: bz_APIStringList*
  description: A pointer to a string list containing the names of the loaded groups
---

{% from '_includes/api_utils.html.twig' import api_object %}

Get a list of loaded user groups on the server.

When you're done with the list, be sure to free the allocated memory with {{ api_object('bz_deleteStringList') }}.
