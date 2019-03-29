# Tank Photoshoots

We make use of the [stagedSceneGenerator (SSG)](https://forums.bzflag.org/viewtopic.php?f=79&t=20051) server plug-in to stage tanks into photoshoot ready positions. This directory has all of the configurations used for photos.

Each SSG configuration must have two comments at the top of the file:

```ini
# roampos: <x> <y> <z> <rot> <elev>
# bzfs: <bzfs options>
```

- The `roampos` values so we can replicate the photos again in the future
- The `bzfs` values contains the additional cli flags needed to be passed to set up the photoshoot server. Be sure to load the SSG plugin and configuration file in addition to the options listed in this section
