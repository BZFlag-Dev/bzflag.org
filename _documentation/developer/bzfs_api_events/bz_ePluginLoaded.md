---
dataType:
    current: bz_PluginLoadUnloadEventData_V1
    since: 2.4.0
    legacy: ~
category: Plug-ins
plugins: ~
parameters:
    - dataType: bz_Plugin*
      description: A pointer to the plug-in class that was loaded.
      name: plugin
    - dataType: double
      description: The time of the event.
      name: eventTime
---

This event is called after a plug-in's `Init()` method is called and has been successfully loaded.
