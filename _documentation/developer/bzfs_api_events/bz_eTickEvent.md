---
dataType: bz_TickEventData_V1
since: 2.4.0
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

This event is called once for each BZFS main loop (this is **not** the equivalent of 1 second).
