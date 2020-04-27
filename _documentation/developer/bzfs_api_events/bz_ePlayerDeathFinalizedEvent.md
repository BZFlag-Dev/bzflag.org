---
_extends:
  bz_ePlayerDieEvent:
    - dataType
    - parameters
since: 2.4.20
category: Player
plugins: []
---

This event is fired _after_ the [`bz_ePlayerDieEvent`]({{ url(collections.bzfs_api_events['bz_ePlayerDieEvent']) }}) and it contains the finalized kill data after any plugins may have reassigned kills.
