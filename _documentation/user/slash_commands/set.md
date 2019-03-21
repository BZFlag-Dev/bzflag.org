---
title: set
syntax: "[variable] [value]"
since: 2.4.0
category: Server Owner
permissions:
  - setAll
  - setVar
---

This command shows or sets BZDB variables, server settings which control aspects of the gameplay (such as tank speed, gravity, and some flag attributes).

The sample output here is a bit harder to read than in-game because it lacks colors. In the output, there will be three values. The first value is the computed (and effective) value. The second is the value or equation that defines the computed value, which can reference other variables and make use of basic math operators. The third is the default value or equation for that variable, based on the client's default values.

If no variable is specified, it will print out all variables and their values. So, `/set` would output:

```
BobTheTank: /set _*
BobTheTank: /set _agilityAdVel 2.25 2.25 2.25
BobTheTank: /set _agilityTimeWindow 1 1.0 1.0
BobTheTank: /set _agilityVelDelta 0.3 0.3 0.3
BobTheTank: /set _ambientLight -nan none none
BobTheTank: /set _angleTolerance 0.05 0.05 0.05
BobTheTank: /set _angularAd 1.5 1.5 1.5
...
```

If a specific variable is specified without a value, it will print that specific variable's value. So, `/set _shotSpeed` would output:

```
BobTheTank: /set _shotSpeed
BobTheTank: /set _shotSpeed 100 100.0 100.0
```

If a wildcard character (an asterisk) is used as part of the variable name, it will show any variables that match that pattern and their values. So, `/set _tank*` outputs:

```
BobTheTank: /set _tank*
BobTheTank: /set _tankAngVel 0.785398 0.785398 0.785398
BobTheTank: /set _tankExplosionSize 21 3.5 * _tankLength 3.5 * _tankLength
BobTheTank: /set _tankHeight 2.05 2.05 2.05
BobTheTank: /set _tankLength 6 6.0 6.0
BobTheTank: /set _tankRadius 4.32 0.72 * _tankLength 0.72 * _tankLength
BobTheTank: /set _tankSpeed 25 25.0 25.0
BobTheTank: /set _tankWidth 2.8 2.8 2.8
```

And finally, if a specific variable and a value is specified, it will set the variable's value. So, `/set _shotSpeed 150` would output:

```
[SERVER->] _shotSpeed set
SERVER: Variable Modification Notice by BobTheTank of set _shotSpeed 150
```
