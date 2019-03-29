---
command: flag
syntax: "..."
since: 2.4.0
category: Admin
permissions:
  - flagMaster
  - flagMod
---

The flag command has several subcommands that can be called, with "reset" and "take" likely being the most used.

## Despawning Flags

```
/flag up
```

This causes all flags to drop/despawn and only return once `/flag reset` is run.

## Listing Flags

```
/flag show
```

This shows a list of all flags on the server along with their status and position.

Here is an example of the output:

```
[SERVER->] #0   i:A   p:-1  r:1  g:1  s:1  p:{-299.5, 311.2, 0.0}
[SERVER->] #1   i:A   p:-1  r:1  g:1  s:1  p:{134.2, -313.6, 31.0}
[SERVER->] #2   i:CL  p:-1  r:1  g:1  s:1  p:{-340.7, 232.8, 0.0}
[SERVER->] #3   i:ST  p:-1  r:1  g:1  s:1  p:{-31.9, -337.4, 0.0}
[SERVER->] #4   i:ST  p:0   r:1  g:1  s:2  p:{270.3, 109.5, 0.0}
[SERVER->] #5   i:SW  p:-1  r:1  g:1  s:1  p:{205.9, 16.7, 0.0}
[SERVER->] #6   i:TH  p:-1  r:1  g:1  s:1  p:{184.6, -207.2, 71.0}
[SERVER->] #7   i:US  p:-1  r:1  g:1  s:1  p:{-331.1, 211.0, 0.0}
[SERVER->] #8   i:V   p:2   r:1  g:1  s:2  p:{172.8, 137.4, 35.0}
[SERVER->] #9   i:V   p:-1  r:1  g:1  s:1  p:{-43.1, -134.5, 0.0}
```

The `#` is the flag ID, which can be useful for resetting a single flag. The `i:` show the abbreviation of the flag. The `p:` shows the player slot number of the player that holds the flag, with -1 indicating that nobody is holding it. The `r:` shows if it is a required flag, meaning it is not one that was randomly picked to spawn. The `g:` shows how many "grabs" of the flag are left before it would respawn in a new location.

The `s:` indicates the flag status, with:

- 0 meaning the flag does not exist
- 1 meaning the flag is on the ground
- 2 meaning the flag is on a tank
- 3 meaning the flag is in the air
- 4 meaning the flag is entering the world
- and 5 meaning the flag is leaving the world.

And finally the three values for `p:` are the x, y, and z coordinates of the flag.

## Resetting Flags

```
/flag reset <all|unused|team|flag abbreviation> [noteam]
```

The "reset" sub-command allows respawning flags on the map. It requires an extra parameter, specifying what flags to reset. When a flag is reset, it will respawn in a new area. This is typically done to balance out the flags after a long period of play, or to bring back a team flag after a flag runner has carried it partially to the other team.

The optional parameter "noteam" can be added at the end of the `/flag reset all` and `/flag reset unused` to skip resetting team flags.

```
/flag reset all
```

This would reset every single flag on the map, even if a player is holding it.

```
/flag reset all noteam
```

This would reset every single non-team flag on the map, even if a player is holding it.

```
/flag reset unused
```

This would reset all flags that are not being held by players.

```
/flag reset team
```

This would reset all team flags.

```
/flag reset <flag ID>
```

Using the output of `/flag show`, it is possible to reset a single specific flag. For example, `/flag reset #5` would reset the flag with a flag ID of 5.

```
/flag reset <flag abbreviation>
```

It is also possible to reset specific types of flags. By passing a flag abbreviation, it will reset any flag of that type. To reset team flags for a single team, use G* for Green, B* for Blue, R* for Red, and P* for Purple. A the list of flag abbreviations are on the [flags](/documentation/flags/) documentation page. For example, `/flag reset G*` would reset all the Green team flags.

## Taking Players' Flags

```
/flag take <slot# | player name>
```

The flag take command allows removing the flag that a player is carrying. It requires either the player's slot number or their callsign. It will cause the flag to drop where there are, and for non-team flags may cause the flag to respawn elsewhere on the map.

If this command is run:

```
/flag take SomePlayer
```

The admin issuing the command would see:

```
[SERVER->] BobTheTank took flag L/70 from SomePlayer
```

The player whose flag was taken does not see a message about who made them drop it.

## Giving Players Flags

```
/flag give <slot# | player name> <flag abbreviation>
```

It is also possible to give a flag to a player. In order for this to work, an available flag of this type must exist on the server.
