---
name: Steamroller
abbreviation: SR
type: Good
summary: Destroys tanks you touch but you have to get really close.
---

Steamroller flag allows the player to kill tanks that get in a specified proximity of the holder.

## Potency

The effect of killing the opponent automatically if they get close enough can be either really powerful or weak. In the case of Steamroller, the prime factor that decides that is the sole server variable the flag has; *srRadiusMult*.

## Server variables

### Usage and effect

Steamroller has a relatively straightforward effect, but its usefulness can vary depending on how far the automatic killing of the opponents can reach, which is declared through the *srRadiusMult* server variable.

Having a low radius of effect will make the flag commonly reach the levels of uselessness, especially when in a battle of shooting tanks. Having a high radius, on the other hand, will make direct 1-on-1 battles much more successful, as tanks will approach each other and when close enough, any sort of wrong move by the opponent will result in them getting steamrolled.

The effect of the high radius also comes useful when attempting to kill opponents with the [Burrow](../burrow/)</a> flag, as the range of reach can increase, killing such opponents sooner than normally possible.

### Caution

High radius or sudden grabs of the Steamroller flag while in the proximity of teammates can result in unwanted teamkills, should the server configuration not include the prevention of teamkills.

### Associated variables

* *srRadiusMult*; radius of steamroller effect.
