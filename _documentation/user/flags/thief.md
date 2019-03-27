---
name: Thief
abbreviation: TH
type: Good
summary: Steal flags. Small and fast but can't kill.
bzdb:
    - _thiefAdLife
    - _thiefAdRate
    - _thiefAdShotVel
    - _thiefTinyFactor
    - _thiefVelAd
    - _thiefDropTime
---

The Thief (TH) flag allows stealing flags from other players. It also reduces the size of the tank and increases its speed. Shooting a player with Thief will steal that player's flag, if any. This applies to superflags (good and bad) and team flags. After stealing a flag or dropping the Thief flag, a reload will be forced, so for a moment it will be impossible to shoot.

## Tactics

On a Capture The Flag server, Thief can be used while sitting on the team base to steal an enemy team flag from a fellow teammate and immediately capture the flag. Thief can also be used to quickly reclaim the team flag from an enemy.

In addition, because of the smaller size and higher speed, the Thief flag can be used to rush into an enemy base. Once in the base, there are several options.  One option is just to drive/jump around and cause a distraction while your teammates also attack.  Another option would be dropping the flag and then killing enemies or stealing the team flag. 

A counter to Thief is to either allow your flag to be taken and then kill the thief (which will temporarily be defenseless and slower/larger) or to drop your flag so that there is nothing to steal.

## Server Settings

- `_thiefAdLife` - A multiplier that affects the duration of a Thief shot
- `_thiefAdRate` - A multiplier that controls how fast the Thief shots reload (with a larger number resulting in faster reloads)
- `_thiefAdShotVel` - A multiplier that controls the velocity of a Thief shot, which ends up controlling how far the shot reaches  
- `_thiefTinyFactor` - A multiplier that controls the size of tank holding Thief
- `_thiefVelAd` - A multiplier that controls the velocity of a tank holding Thief
- `_thiefDropTime` - When the thief flag is dropped, either manually or after stealing a flag, a reload is forced. This setting controls how long that reload takes.
