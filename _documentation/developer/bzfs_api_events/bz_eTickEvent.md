---
dataType:
    current: bz_TickEventData_V1
    since: 2.4.0
    legacy: ~
category: Other
plugins:
    - autoFlagReset
    - bzfscron
    - fairCTF
    - nagware
    - rabbitTimer
    - rabidRabbit
    - serverControl
    - serverSidePlayerSample
    - teamflagreset
    - timedctf
    - wwzones
parameters:
    - dataType: double
      description: Local Server time of the event (in seconds)
      name: eventTime
---

This event is called once for each BZFS main loop. The main loop does not run at a consistent interval so do not assume the time between ticks. The time between ticks can be up to three seconds but can also be a short as possible (meaning, no delay other than the processing time of other code).

The typical way this event is used involves tracking the last eventTime that some action was triggered and waiting until a specified amount of time has elapsed before triggering that same action. Avoid triggering an action on every tick as this will have an adverse effect on performance.
