---
name: Identify
abbreviation: ID
type: Good
summary: Identifies type of nearest flag.
---

The Identify (ID) flag allows the player to see into the contents (type) of the nearest flag to the holder.

It manages to identify the nearest flag only if said flag is also in the range specified by the `_identifyRange` server setting, with its argument of distance being expressed in world units.

## Tactics

Identify can be utlized as a means of speeding up the flag choosing process or avoiding of potential bad flags.

Since the tank holding Identify doesn't have to completely reach the destination flag to check its type, it can shorten the distance the tank has to travel to learn the contents of all the flags, should there be a mass of flags in a single place. In return, doing so can also speed up the process of finding the desired flag.

On maps with bad flags, Identify allows the player to identify and avoid them entirely, preventing negative effects from bring applied to the player.

## Server Settings

- `_identifyRange` - if a flag is this distance or closer to a tank carrying the Identify flag, it will display the closest flag's type
