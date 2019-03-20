---
name: Tiny
abbreviation: T
type: Good
summary: Tank is small and can get through small openings. Very hard to hit.
---

The Tiny (T) flag allows the player to be smaller in tank size than normal, all while retaining all other properties, such as the tank speed, shot speed, or jump height.

It is declared by the value of the `_tinyFactor` server setting, which is multiplied by normal tank size, to shrink a tank holding the flag. Manipulation of the size is a combination of changing `_tankLength` and `_tankWidth` in parallel.

## Tactics

Tiny can be utilized as a means of easier bullet evasion. Since the tank is smaller than normal, it can slip through bullet spreads that a tank of normal size could not. The closer to zero the `_tinyFactor` is set, the more potent Tiny is.

It can also serve as a navigation utility, helping the player pass through small openings, should the map have them.

## Server Settings

- `_tinyFactor` - multiplied by the normal tank size to shrink a tank carrying the tiny flag
