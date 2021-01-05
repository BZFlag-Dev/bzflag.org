---
command: unloadplugin
syntax: "<display name>"
since: 2.4.0
category: Server Owner
permissions:
  - plugins
---

This attempts to unload a server plugin and must be passed the display name of the plugin. The display names of loaded plugins can be found with the ```/listplugins``` command.

This will unload the logDetail plugin which has a display name of Log Detail.
```
/unloadplugin Log Detail
```
