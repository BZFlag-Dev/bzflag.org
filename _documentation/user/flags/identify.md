---
name: Identify
abbreviation: ID
type: Good
summary: Identifies type of nearest flag.
---

The Identify (ID) flag allows the player to see into the contents (type) of the nearest flag to the holder, without having to pick the flag up.

It manages to identify the nearest flag only if said flag is also in the range specified by the `_identifyRange` server setting, with its argument of distance being expressed in world units.

## Tactics

Identify can be utilized as a means of speeding up the flag choosing process, avoiding of potential bad flags, or finding the desired flag from a patch of flags.

Since the tank holding Identify does not have to completely reach the destination flag to check its type, it can shorten the distance the tank has to travel to learn the contents of all the flags, should there be a mass of flags in a single place. Doing so can speed up the process of finding the desired flag.

On maps with bad flags, Identify allows the player to identify and avoid them entirely, preventing negative effects from being applied to the player.

If `_maxFlagGrabs`, which declares after a maximum of how many flag drops will the flag zap to a different location on the map, is set to a relatively low value (especially 1), then Identify can serve as a risk-free way to first identify the types of all flags within a patch and then choose the desired one among them, removing the gamble and dilemma whether the flag will remain where dropped and whether the next flag will actually be better suited than the current.

## Server Settings

- `_identifyRange` - the buffer radius (in world units) a tank must be in to be able to identify the flag
