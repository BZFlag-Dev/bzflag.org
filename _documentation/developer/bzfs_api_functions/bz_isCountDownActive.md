---
since: 2.4.0
category: Timed Games
signatures:
    - []
returns:
    dataType: bool
    description: Returns true if a timed game is progress.
---

Check whether or not a timed game is currently in progress. A timed game is as two separate situations:

- A server is configured with the `-time` flag, meaning the server will shut down automatically after N seconds; players see a countdown at the top of their HUD
- A server is configured with `-time` and `-timemanual` and a player or plug-in has initiated a timed match, often used for league matches; players see a countdown at the top of their HUD

If the countdown is paused, it is still considered "active."
