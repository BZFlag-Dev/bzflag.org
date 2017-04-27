---
dataType: bz_ReportFiledEventData_V1
parameters:
  - dataType: int
    description: The player ID that is filing the report.
    name: playerID
  - dataType: bz_ApiString
    description: The report message that is filed.
    name: message
  - dataType: double
    description: Time of event.
    name: eventTime
---

This event is called each time a player or plugin files a report
