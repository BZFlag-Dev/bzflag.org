---
since: 2.4.20
category: Spawn Management
signatures:
    - - dataType: bz_CustomZoneObject*
        name: obj
        description: The `bz_CustomZoneObject` that will be used as a bounding box to determine a spawn point.
        default: ~
      - dataType: float
        name: randomPos[3]
        description: The pointer to the random spawn position (X, Y, and Z) within `obj`.
        default: ~
returns:
    dataType: bool
    description: True when a spawn point was able to be found within the given parameters.
---

Get a random position within a `bz_CustomZoneObject` that is safe for a player to spawn at.

The following considerations are taken into account when this function determines a "spawn point":

- The point is within the world boundaries (max height too)
- The point does not collide with map objects
- The point has enough vertical clearance for a tank to spawn at

If a "spawn point" could not be determined within the given zone, this function will return `false`. If this function returns `false`, you **cannot** trust the points set to `randomPos`; they will simply be the last random position that was tested before this function gave up.

This function respects the `_spawnMaxCompTime` BZDB setting when trying to calculate a random spawn position.
