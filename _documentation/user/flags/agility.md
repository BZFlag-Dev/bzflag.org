---
name: Agility
abbreviation: A
type: Good
summary: Tank is quick and nimble making it easier to dodge.
bzdb:
  - _agilityAdVel
  - _agilityTimeWindow
  - _agilityVelDelta
---

The Agility (A) flag allows a tank to move and turn faster for short bursts of time when a tank begins its acceleration. After this window, the tank will return to its normal settings requiring a full stop before agility can be used again.

## Tactics

With an increased agility, tanks holding the flag will be able to move further away from their pursuer or will be able to turn faster increasing a tank's ability to dodge an incoming bullet. Because the effects of agility are only active for `_agilityTimeWindow` seconds, players will often choose to let their tanks come to a full stop after the agility has worn off and immediately accelerate after to use the agility repeatedly. Using agility to jump as soon as a tank has started accelerating will allow it to jump further for quicker getaways.

## Server Settings

- `_agilityAdVel` - Multiplies `_tankSpeed` for tanks holding Agility flag for a specified amount of time (`_agilityTimeWindow`)
- `_agilityTimeWindow` - Number of seconds that the tank will have the speed specified by _agilityAdVel
- `_agilityVelDelta` - How fast the agility accelerates the player to _agilityAdVel
