---
command: silence
syntax: "<callsign>"
since: 2.4.0
category: Player
permissions: ~
---

The silence command allows the player to hide messages from a specific callsign. If an asterisk (\*) is passed as the callsign, then all chat messages are hidden. If a minus sign (-) is passed as the callsign, then messages from unregistered players are hidden.

An alternate way to silence or unsilence is to use the 'k' key, which brings up a prompt at the bottom of the screen. This accepts a callsign, asterisk, or minus sign, and automatically handles adding or removing the entry depending on if it already exists.
