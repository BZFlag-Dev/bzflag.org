---
since: 2.4.0
category: Player Records
signatures:
    - - dataType: const char*
        description: 'The callsign of a player or the slot number (e.g. #2) of the player **with** the pound sign (#)'
        name: name
        default: ~
returns:
    dataType: bz_BasePlayerRecord*
    description: A pointer to the player record or NULL
---

{% from '_includes/api_utils.html.twig' import api_object %}

Gets the information for the player with the specified slot index or callsign. This function is intended to be used when implementing custom slash commands that take a player as a parameter.

The returned player info won't update as the game progresses. If you need new updates on the player's info, you can call {{ api_object('bz_updatePlayerData') }}. After you're done with the player info returned from this method, you must release it by calling {{ api_object('bz_freePlayerRecord') }}.
