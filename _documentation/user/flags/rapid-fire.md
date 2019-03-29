---
name: Rapid Fire
abbreviation: F
type: Good
summary: Shoots more often. Shells go faster but not as far.
bzdb:
    - _rFireAdLife
    - _rFireAdRate
    - _rFireAdVel
---

The Rapid Fire (F) flag increases the speed of shots and reduces the reload time. However, it also reduces the shot range.

## Server Settings

- `_rFireAdLife` - A multiplier that affects the duration of a Rapid Fire shot (and will be calculated based on `_rFireAdRate` by default)
- `_rFireAdRate` - A multiplier that controls how fast the Rapid Fire shots reload (with a larger number resulting in faster reloads)
- `_rFireAdVel` - A multiplier that controls the velocity of a Rapid Fire shot, which ends up controlling how far the shot reaches  
