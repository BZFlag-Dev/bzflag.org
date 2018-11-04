---
since: 2.4.0
category: Player Records
signatures:
  -
    - dataType: int
      description: The id of the player
      name: index
      default: ~
returns:
  dataType: bz_BasePlayerRecord*
  description: A pointer to the player record or NULL
---

{% from '_includes/api_utils.html.twig' import api_object %}

Gets the information for the player at the given index. The returned player info won't update as the game progresses; if you need new updates on the player's info, you can call {{ api_object('bz_updatePlayerData') }}.

After you're done with the player info returned from this method, you must release it by calling {{ api_object('bz_freePlayerRecord') }}.
