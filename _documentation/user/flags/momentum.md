---
name: Momentum
abbreviation: M
type: Bad
summary: Tank has inertia. Acceleration is limited.
---

Momentum causes a tank to have difficulties slowing down, speeding up or turning, which may ruin timing on jumps, make turns less predictable, and increase difficulties in dodging shots.

## Tactics

Momentum requires prediction skills and the ability to plan movements ahead of time to countering its effects. The increased inertia of one's tank requires one to react much earlier, as the acceleration rates are slowed down. This may cause one to feel as if controls are acting sluggish, which requires one to plan movements ahead of time and react earlier. The *'_momentumFriction'* variable may be differently set from the *'_friction*', so one should be aware that friction may be different as well.

## Server Settings
* **_momentumLinAcc** affects the forwards and backwards acceleration rate.
* **_momentumAngAcc** affects the turn rate acceleration rate.
* **_momentumFriction** affects the friction of Momentum, regardless of the '**_friction**' variable.