---
since: 2.4.0
category: Group Management
signatures:
  -
    - dataType: const char*
      name: group
      description: The group whose perms to get
      default: ~
returns:
  dataType: bz_APIStringList*
  description: A pointer to a string list containing the permissions of the specified group
---

{% from '_includes/api_utils.html.twig' import api_object %}

Get the permissions a group has.

When you're done with the list, be sure to free the allocated memory with {{ api_object('bz_deleteStringList') }}.
