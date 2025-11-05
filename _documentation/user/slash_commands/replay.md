---
command: replay
syntax: "..."
since: 2.4.0
category: Admin
permissions:
  - replay
---

The replay command is only for replay servers, which are servers dedicated to the purpose of playing back game recordings. The replay command has several subcommands to list, load, and control playback of a replay file.

## Listing Replays

```
/replay list [-t | -n | --] [pattern]
```

The replay list command will display a list of available replay files to play back. Passing -t will sort by time and -n will sort by name. A search pattern can also be provided. If the pattern needs to start with a hyphen, -- can be provided before the pattern to indicate that it is the end of the options. For example, `/replay list -- -something-to-search-for`. Here is an example of the output:

```
[SERVER->] dir:  recordings\
[SERVER->] #01:  manualsave                      [     35.2 seconds]
[SERVER->] #02:  tofile                          [     19.8 seconds]
```

## Loading Replays

```
/replay load <filename | #index>
```

The replay load command will load a specific replay file into the game server's memory. **After loading a replay that contains a different map, all users connected to the replay server must rejoin.** For example, `/replay load manualsave` results in:

```
SERVER: An incompatible recording has been loaded
SERVER: Please rejoin or face the consequences (client crashes)
[SERVER->] Loaded file:  recordings\manualsave
[SERVER->]   author:     BobTheTank ()
[SERVER->]   protocol:   BZFS0221
[SERVER->]   server:     2.4.10.20170315-MAINT-linux-gnu-SDL
[SERVER->]   seconds:    35.2
[SERVER->]   start:      Fri May  5 03:36:02 2017
[SERVER->]   end:        Fri May  5 03:36:37 2017
```

## Watching a Replay

```
/replay play
```

This starts the playback of replay file. It may take several seconds before activity appears.

### Looping a Replay

```
/replay loop
```

This plays the replay in a continuous loop.

### Skipping Through a Replay

```
/replay skip <+seconds | -seconds>
```

The replay skip command allows skipping forward or backward by roughly the number of seconds specified. The amount that it skips will normally not be exactly what was asked as it skips to a point where the full set of data has been written, which defaults to 10 seconds. So, it may be necessary to skip back further than expected if intending to replay a section of the recording. For example, with `/record skip -4`, it might actually jump back 7 seconds:

```
BobTheTank: [REPLAY] skipped -7.0 seconds (asked -4)
```

During playback, there may also be instances where the replay server mentions there is no activity for a period of time. Using the `/replay skip` command with a small duration can be used to skip ahead to the next period of activity. For example:

```
SERVER: No activity for the next 335.3 seconds
BobTheTank: [REPLAY] skipped 326.8 seconds (asked 1)
```

## Pausing a Replay

```
/replay pause
```

The replay pause command pauses the playback of a replay. A subsequent `/replay play` will resume the playback.

## Replay Stats

```
/replay stats
```

The replay stats command shows information such as the replay duration and position. Here is an example of the output:

```
[SERVER->] Replay Date:  Fri May  5 03:36:26 2017  [68.53 %]  (24.1 secs / 35.2 secs)
```
