---
dataType:
    current: bz_PollVoteEventData_V1
    since: 2.4.10
    legacy: ~
category: Polls
plugins: ~
parameters:
    - dataType: int
      description: The player ID casting a vote
      name: playerID
    - dataType: bool
      description: True if the player voted in favor of the poll; i.e. /vote yes
      name: inFavor
    - dataType: bool
      description: Setting to false will disallow a player from voting
      name: allow
    - dataType: bz_ApiString
      description: The message sent to the player as to why their vote wasn't cast
      name: reason
    - dataType: double
      description: The time of the event.
      name: eventTime
---

This event is called whenever a player uses /vote in a poll
