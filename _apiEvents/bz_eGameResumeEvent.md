---
dataType: bz_GamePauseResumeEventData_V1
since: 2.4.4
plugins: ~
parameters:
  - dataType: bz_ApiString
    description: The callsign of whoever triggered the event. By default, it's "SERVER"
    name: actionBy
  - dataType: double
    description: The server time the event occurred (in seconds).
    name: eventTime
---

This event is triggered when a timed game resumes
