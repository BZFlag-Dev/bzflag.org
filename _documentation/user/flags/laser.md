---
name: Laser
abbreviation: L
type: Good
summary: Shoots a laser. Infinite speed and range but long reload time.
video: true
bzdb:
  - _laserAdLife
  - _laserAdRate
  - _laserAdVel
---

The Laser (L) flag shoots a beam of light with infinite speed (but finite range), bouncing off obstacles if ricochet is enabled. Unlike most other shot types, a single shot can kill multiple players.

## Tactics

The laser flag is very powerful, but it also has some drawbacks.  First, it is not possible to kill a player holding the [Cloaking (CL) flag](../cloaking/). The cloaking flag can therefore be used to either kill the one holding laser or force them to drop laser to defend themselves.

The laser also has a long reload time, defaulting to twice the reload duration of normal shots.  Forcing the player to use all their shots will leave them defenseless.

Maps with ricochet enabled can also make it dangerous to shoot a laser.  The holder may accidentally shoot a teammate or themselves.

## Server Settings

- `_laserAdLife` - A multiplier that affects the duration of a Laser shot
- `_laserAdRate` - A multiplier that controls how fast the Laser shots reload (with a larger number resulting in faster reloads)
- `_laserAdVel` - A multiplier that controls the velocity of a Laser shot, which ends up controlling how far the shot reaches  
