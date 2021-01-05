---
command: loadplugin
syntax: "<name_or_path>"
since: 2.4.0
category: Server Owner
permissions:
  - plugins
---

This attempts to load a server plugin. Plugins can add new features and game modes, or handle administrative functions. For plugins installed into a searched path, such as the install directory, you are able to load a plugin using only the name. For other locations, you must use an absolute or relative path, optionally including the file extension. On some platforms, such as Linux, the name and path would be case-sensitive.

The below example will attempt to load a plugin called logDetail from a searched directory. The file extension is not necessary.
```
/loadplugin logDetail
```

This will attempt to load the Thief Control plugin that is outside a searched directory by providing an absolute path. Another option is using a path relative to the current working directory. Including the extension is not necessary as the BZFlag server will add it automatically.
```
/loadplugin /home/user/bzflag/plugins/theifControl/.libs/theifControl
```

**Note:** Generally this command isn't used as plugins would be loaded as part of the server configuration file or the world option block. Some plugins may also not behave as expected if loaded after the server is running.
