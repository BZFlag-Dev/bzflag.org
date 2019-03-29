---
name: Burrow
abbreviation: BU
type: Good
summary: Tank burrows underground, impervious to normal shots, but can be steamrolled by anyone!
bzdb:
  - _burrowAngularAd
  - _burrowDepth
  - _burrowSpeedAd
---

The Burrow (BU) flag causes the player's tank to sink into the ground. The primary benefit of this flag is that a burrowed tank is lower than the muzzle height of non-burrowed tanks, and thus cannot as easily be shot. The burrow effect will only occur when a tank is on the ground, and the only way to unburrow is to drop the flag.

The flag has two main downsides. By default, a burrowed tank will move and turn slower than a normal tank. A burrowed tank will also explode if another tank drives over it.

## Tactics

Burrowed tanks can be at a disadvantage if one or more players target them since normal tanks can move faster than a burrowed tank. Faster moving tanks, such as those with [High Speed](../high-speed/) or [Thief](../thief/), are even more dangerous. An enemy with [Guided Missile](../guided-missile/) can also easily kill a burrowed tank.

Keeping some distance between the burrowed player and enemies is best. A normal enemy won't be able to shoot a burrowed tank, but the burrowed tank can shoot normal tanks. One tactic would be to shoot at another player to force them into jumping, and then shooting where they are going to land.

Some maps have obstacles that normal players cannot pass, but allow a burrowed tank to drive under. This can be used to make a quick escape when being pursued.

There are several ways of killing a burrowed player. Besides the GM flag, the [Shockwave](../shockwave/) flag can also be used to kill a burrowed tank. Driving over a burrowed tank will also kill them. On servers where shots keep vertical velocity, shooting while falling can be used to hit a burrowed tank.


## Server Settings

- `_burrowAngularAd` - A multiplier that controls the turning speed of a burrowed tank
- `_burrowDepth` - This is the depth that a burrowed tank will sink to
- `_burrowSpeedAd` - A multiplier that controls the velocity of a burrowed tank
