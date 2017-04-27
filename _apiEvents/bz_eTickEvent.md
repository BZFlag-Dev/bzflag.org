---
dataType: bz_TickEventData_V1
parameters:
  - dataType: double
    description: Local Server time of the event (in seconds)
    name: eventTime
---

This event is called once for each BZFS main loop (this is **not** the equivalent of 1 second).
