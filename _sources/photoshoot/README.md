# Tank Photoshoots

We make use of the [stagedSceneGenerator (SSG)](https://forums.bzflag.org/viewtopic.php?f=79&t=20051) server plug-in to stage tanks into photoshoot ready positions. This directory has all of the configurations used for photos.

Each SSG configuration must have two comments at the top of the file:

```ini
# roampos: <x> <y> <z> <rot> <elev>
# world: <bzw file>
# options: N/A
```

- The `roampos` values so we can replicate the photos again in the future
- The `world` value has the name of the BZW file used for the photo
- The `options` values has any extra BZFS options that should be fed when starting the photoshoot server
