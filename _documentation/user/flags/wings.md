---
name: Wings
abbreviation: WG
type: Good
summary: Tank can drive in midair.
---

The Wings (WG) flag allows the player to maneuver their tank while in the air, enabling them to move forward, backward, or turn to either side (x and y axis), all while the gravity still affects the tank midair (z axis).

The behavior of the Wings flag varies on each map so it's a good idea to test out the limits of the flag when on a new map.

## Tactics

The number of "flaps" is how many times a tank is allowed to jump while in midair before having to land again. By default, tanks can only jump once meaning you won't get any extra jumps while in midair. The number of flaps can be configured with the `_wingsJumpCount` variable so this value differs on each map. Be sure to keep track of the amount of times you've jumped with this flag to prevent falling at unfortunate times.

When a tank is jumping and has upward movement, flapping will send your tank upwards with respect to the `_wingsGravity` variable, defaulting to the map's gravity. When a tank flaps while it has downward movement, it will only send the tank upwards a fraction of the typical height due to fighting against gravity.

Despite being a flying tank, [guided missiles](../guided-missile/) will follow their targets midair and will need to be outmaneuvered. On maps where shots respect the shooter's vertical velocity, a tank without wings will be able to shoot upwards and hit flying tanks.
