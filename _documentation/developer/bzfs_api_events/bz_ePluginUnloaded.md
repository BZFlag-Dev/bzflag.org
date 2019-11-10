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

This event is called before a plug-in's `Cleanup()` method is called and is then unloaded.
