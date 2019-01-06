---
name: Wings
abbreviation: WG
type: Good
summary: Tank can drive in air.
---

Wings flag allows the player to maneuver their tank while in the air, enabling them to move forward, backward, or turn to either side (x and y axis), all while the gravity still affects the tank midair (z axis).

## Potency

The server variables affecting Wings can greatly change the potency of the flag, but in general, it is considered to be one of the most powerful flags in the game.

## Server variables

### Usage and effect

The *wingsJumpCount* is the most commonly altered server variable. While the variable defaults to 1, meaning that the user cannot perform any additional jumps (commonly referred to as *flaps*) while in the air, map creators tend to frequently change the variable to a higher value, allowing additional maneuver over the z axis as well, essentially flying through the air.

Other Wings-specific server variable manipulations are more uncommon, but can still be found in various maps.

A high *wingsJumpCount* server variable is often combined with an enabled *shotsKeepVerticalVelocity* server variable that maximizes the flag's effectiveness. It is commonly used in maps where Wings users battle against other Wings users.

### Associated variables

* *wingsGravity*; how much gravity affects tanks with the WG flag.
* *wingsJumpCount*; the number of jumps a tank with the wings flag can do before returning to the ground.
* *wingsJumpVelocity*; the initial velocity of a jump with wings, in world units/sec.
* *wingsSlideTime*; when in the air, the tanks will slide for this long.
