---
dataType: bz_BanEventData_V1
since: 2.4.0
category: Administrative
plugins: ~
parameters:
  - dataType: int
    description: This value is the player ID for the banner.
    name: bannerID
  - dataType: int
    description: This value is the player ID for the bannee.
    name: banneeID
  - dataType: int
    description: This value is the duration of the ban in minutes.
    name: duration
  - dataType: bz_ApiString
    description: This value contains the reason why and by who a player got banned.
    name: reason
  - dataType: bz_ApiString
    description: This value contains the ipaddress of the bannee.
    name: ipAddress
  - dataType: double
    description: This value is the local server time of the event.
    name: eventTime
---

This event is called each time a regular ban is executed
