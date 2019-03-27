---
title: Getting Started
docpath: getting_started/
---

Getting started with BZFlag is easy. This short guide will show how to get started.

## Downloading and installing the game

Our [downloads](/downloads/) page includes an installer for Windows and a ZIP package for macOS. We also offer a source code download primarily for Linux and BSD users.

### Installing on Windows

Download the latest release for Windows and run the installer file. Follow the installation prompts to install the game.

### Installing on macOS

Download the latest release for macOS. Open the Zip file if it does not open automatically. Drag BZFlag into the Applications folder.

Using [brew](https://brew.sh/) and [brew cask](https://caskroom.github.io/), it is also possible to install BZFlag with: `brew cask install bzflag`

### Installing on Linux

Note that many Linux distributions will lag behind our release cycle. Debian, for instance, only pushes new version of the game when they release a new major release of Debian every 2 or 3 years. For that reason, it is recommended to build from our latest source tar if the packaged version is older.

To install the (possibly outdated) distribution packages:
- For Debian and Debian-based distributions, such as Ubuntu or Mint: `apt-get install bzflag-client` or `apt-get install bzflag`
- For RedHat-based distributions, such as CentOS or Fedora: `yum install bzflag` or `dnf install bzflag`
- For openSUSE: `zypper install bzflag`
- For Arch linux: `pacman -S bzflag`
- For Gentoo linux: `emerge bzflag`

## Optionally register a callsign

BZFlag allows players to register their name, also known as their callsign. Some servers provide additional benefits for registered users, such as being allows to vote in polls. Another benefit is that players can not use another player's registered callsign. To register a callsign, visit our [forums](https://forums.bzflag.org/) and register an account. The username and password on the forums will be used as callsign and password in the game.

## Game Mechanics

### Teams

The game has four main teams: Red, Green, Blue, and Purple. In the Free For All and Capture The Flag game modes, each of those teams work together to fight the other teams. Teammates should not shoot each other in those modes. In the Open Free For All game mode, the teams do not matter and it is allowed to shoot any tank for points.

There is also a Rogue class that is allowed to shoot any other tank, even other Rogues.

In the Rabbit Chase game mode, team selection does not matter.  The server will automatically set the player's team to either Hunter or Rabbit.

Servers can choose to limit the number of players per team or disable a team entirely.

### Game Modes

There are four main game modes. Some servers may use custom plugins to create variations of these game modes.

#### Free For All (FFA)

In Free For All, also known as Free-style, the objective is to shoot enemy tanks to earn points. The four main teams should not shoot other members of their team as this will result in a penalty. Rogue players are allowed to shoot any tank, even other Rogues. 

#### Open (Teamless) Free For All (OpenFFA)

In OpenFFA, the objective is to shoot other tanks to earn points. Teams do not matter, and all tanks are allowed to shoot other tanks.

#### Capture The Flag (CTF)

In CTF, each of the four main teams can have one or more team flag and one or more team base, both colored to match their team. For each team, the objective is to capture enemy team flags by grabbing them and bringing them back to their own base. Each team also tries to prevent the enemy team from capturing their own flag. 

#### Rabbit Chase

In this mode, a single Rabbit is chosen by the server. All of the other players will be Hunters. The Rabbit has the opportunity to score the most points, but it is also the most vulnerable. When the Rabbit is killed, a new Rabbit is selected by the server.

### Flags

There are two main types of flags: team flags and super flags. Team flags only show up in the CTF game mode. Super flags are the white flags. There are good super flags that provide some additional benefit, such as faster movement, a smaller tank, or different weapons like laser or guided missile. There are also bad super flags that disable parts of the tank or reduce performance of the tank. Examples of bad flag effects include radar jamming, reversed controls, left turn only, and a bouncy tank. Bad flags cannot be dropped manually and will normally have either a timer or will require finding an antidote flag.

View the [flags](/documentation/flags/) documentation for a list of all official flags and their description. It is possible game servers to run plugins that add custom flags or modify the behavior of existing flags. 

### Controls

Here are some of the basic controls. These can be customized in the Options > Input Settings menu > Change Key Mapping menu.

#### Tank
- Spawn: <kbd>i</kbd> key or right mouse button
- Movement: Use the mouse or the arrow keys.
- Shoot: <kbd>Enter</kbd> key or left mouse button
- Jump: <kbd>Tab</kbd> key
- Drop flag: <kbd>Space</kbd> key or middle mouse button
- Identify player / lock on (with Guided Missile flag): <kbd>i</kbd> key or right mouse button

#### Heads Up Display (the text and visual components that appear in front of the 3D view)
- Radar zoom: <kbd>1</kbd>, <kbd>2</kbd>, and <kbd>3</kbd> keys, or <kbd>shift</kbd> + mouse wheel
- Toggle scoreboard: <kbd>s</kbd> key

#### Chat and the control panel
- Send chat to all: <kbd>n</kbd> key
- Send chat to team: <kbd>m</kbd> key
- Send chat to nemesis (last person that was killed by or killed the player): <kbd>,</kbd> (comma) key
- Send chat to recipient (last person that was messaged by or messaged the player): <kbd>.</kbd> (period) key

The full list of keys can be viewed in the Help menu in-game or in the Change Key Mapping menu mentioned above.

### User Interface

This is also known as the Heads Up Display or HUD.

[![User Interface Layout](/images/documentation/user_interface_layout_small.jpg)](/images/documentation/user_interface_layout.jpg)
