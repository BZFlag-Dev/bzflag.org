---
dataType: bz_PollVetoEventData_V1
since: 2.4.10
category: Polls
plugins: ~
parameters:
  - dataType: int
    description: The player ID who vetoed the poll; this is set to BZ_SERVER if it was done through bz_vetoPoll()
    name: playerID
  - dataType: double
    description: The time of the event.
    name: eventTime
---

This event is called whenever a poll is vetoed
