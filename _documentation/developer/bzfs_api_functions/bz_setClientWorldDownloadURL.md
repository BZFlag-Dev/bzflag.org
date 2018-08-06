---
since: 2.4.0
signatures:
  -
    - dataType: const char*
      name: URL
      description: The URL to be sent to connecting clients for the cached map
      default: ~
returns:
  dataType: void
  description: ~
---

{% from '_includes/api_utils.html.twig' import api_object %}

This function sets the current URL used to download a cached world file. It will be sent to clients that connect giving them the option of using that file. This is helpful if the plug-ins have changed the map file during a call to {{ api_object('bz_restart') }}.
