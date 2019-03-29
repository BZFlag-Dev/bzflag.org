---
command: record
syntax: "..."
since: 2.4.0
category: Admin
permissions:
  - record
---

The record command is used on normal game servers to control the recording of replay files. The record command has several subcommands to control the recording of replay files.

## Start a Recording in Memory

```
/record start
```

This command will begin recording to the recording memory buffer. If the recording starts to exceed the buffer size, the oldest data will be purged. If the `-recbuf` server configuration is specified, the server will automatically begin recording into the memory buffer when started, making this command unnecessary.

## Saving a Recording

```
/record save <filename> [seconds]
```

The record save command will save the current recording buffer to the specified file. So, for example, using `/record save manualsave` would write the replay to "manualsave" and display a message similar to:

```
[SERVER->] Record buffer saved to: recordings\manualsave
```

It is also possible to save a recent portion of the recording buffer by specifying a number of seconds after the filename. For example, to save the last 30 seconds, use `/record save somefile 30`. Because of how the recording system works, this will generally save a slightly larger duration.

## Canceling an Active Recording

```
/record stop
```

This command will stop a recording and discard the contents of the memory buffer.

## Start a Recording to a File

```
/record file <filename>
```

This command will begin writing a recording to a specific file. This can exceed the buffer size and it is writing directly to disk. It must be stopped with `/record stop` at some point.

## Set Size of Recording Buffer

```
/record size <Megabytes>
```

This command will change the buffer size in memory. The minimum size is 1MB, and the default is 16MB. It is typically set on the server from the command line or the configuration file using the `-recbuf` parameter.

## Replay Rate

```
/record rate <seconds>
```

This controls how often a full set of states (variables, teams, flags, players, rabbit, game time) is written to the replay file. This defaults to 10 seconds, and supports a value between 1 and 30 seconds. A lower value use more storage but may help when seeking through replays.

## Replay Stats

```
/record stats
```

While recording, this command will show statistics about the recording. For example:

```
[SERVER->] Buffered:  28470 bytes / 154 packets / 49.7 seconds
```

## Replay List

```
/record list [-t | -n | --] [pattern]
```

This displays a list of existing replay files. See the `/replay list` documentation below for information about sorting and filtering. Here is an example of the output:

```
[SERVER->] dir:  recordings\
[SERVER->] #01:  manualsave                      [     35.2 seconds]
[SERVER->] #02:  tofile                          [     19.8 seconds]
```
