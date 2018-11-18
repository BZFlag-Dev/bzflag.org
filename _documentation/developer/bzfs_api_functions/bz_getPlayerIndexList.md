---
since: 2.4.0
category: Player Lists
signatures:
    - []
    - - dataType: bz_APIIntList*
        description: A pointer for an already created list
        name: playerList
        default: ~
returns:
    - dataType: bz_APIIntList*
      description: A pointer to an integer list of player IDs
    - dataType: bool
      description: True if the player list was created with the given pointer
---

{% from '_includes/api_utils.html.twig' import api_object %}

Get a list of player IDs who are currently on the server.

If you pass a pointer to an {{ api_object('bz_APIIntList*') }} as a parameter, it will write to that pointer. If no parameter is given, the API will create a new pointer and return it.

The pointer returned by this function must be freed when you're done by calling {{ api_object('bz_deleteIntList') }}. This list is not updated as players join or part; a new list must be created each time you wish to get a list of players.
