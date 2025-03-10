---
command: "roampos"
syntax: "{reset|send|angle|x y z [theta [phi [zoom]]]}"
since: 2.4.0
category: Client
permissions: ~
---

Manipulate the observer camera (only useful in Roaming and Tracking modes). Without arguments, it shows a usage message and the current camera location. `reset` resets  the  camera's location to the center of the map and `send` sends information about the camera to the server. `angle` moves the camera outside the map at a certain angle, looking towards its center. `x`, `y` and `z` are used to set the camera's location, theta defines the camera's horizontal angle, `phi` defines its vertical angle and `zoom` sets the camera's zoom level. All angles are defined in degrees.
