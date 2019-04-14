---
title: Compiling on Windows
docpath: compiling/windows
---

## Dependencies

BZFlag uses Visual C++ 2017 (VC15), which is part of Visual Studio 2017. The
[Community edition may be downloaded for free][msvc], though does require a (free) Microsoft account for continued use.
Run the Visual Studio 2017 installer and choose to install "Desktop Development with C++". Additionally, since new
versions of the Windows 10 SDK are constantly coming out, you either need to install the version we current target, or
update the bzflag-dependencies build script and upgrade our project files to target the current version. As of this
writing, we target "Windows 10 SDK (10.0.16299.0)".

The commands below assume the use of the command line git client from [Git for Windows][gitdl] with the Command Prompt.
Using Git Bash will handle directory paths slightly different (affecting the `mkdir` and `cd` commands under "Compiling
the dependencies") and using a Git GUI program will also deviate from our instructions.

We provide a repository of third-party dependencies for building on Windows. We try to provide a binary download for
each release of the game, but it's easy enough to build yourself. Additionally, if your intent is to build an installer,
it is necessary to install [NSIS 3][nsis]. The installer will be built only from our fullbuild solution in Release mode.

For now, let's start by getting the dependencies.  There are two methods: downloading pre-built binaries or compiling
them yourself. If you are intending to work on the master branch of BZFlag, compiling the dependencies is the only
option.

### Downloading pre-built binaries

1. Navigate to our [bzflag-dependencies releases](https://github.com/BZFlag-Dev/bzflag-dependencies/releases) page
1. Find a release that matches your version of the game (though newer ones may work as well)
1. Download the .7z
1. Extract the .7z with 7zip

### Compiling the dependencies

**Note:** Some of our dependencies do not support spaces in the path. It is suggested to work out of a path such as
`C:\code\` to avoid that kind of problem.

**For BZFlag 2.4:**

{% set command = [
  { folder: '', command: 'mkdir \\code' },
  { folder: '', command: 'cd \\code' },
  { folder: 'code', command: 'git clone --branch 2.4 https://github.com/BZFlag-Dev/bzflag-dependencies.git' },
] %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'windows' } %}

**For BZFlag master (2.5):**

{% set command = [
  { folder: '', command: 'mkdir \\code' },
  { folder: '', command: 'cd \\code' },
  { folder: 'code', command: 'git clone --branch master https://github.com/BZFlag-Dev/bzflag-dependencies.git' },
] %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'windows' } %}

Once the repository is cloned, navigate to the directory and run the buildVC2017.bat file. This will take a bit to run
but should result in successful builds.

### Using the dependencies

Once you have either the pre-built binaries or you have compiled the dependencies, you need to ensure that BZFlag can
find them.

**For BZFlag 2.4.0 through 2.4.18:**

An environment variable called BZ_DEPS must point to the directory containing the various output directories. Navigate
to the Environment Variables control panel. Create a new user environment variable called BZ_DEPS and point it to the
directory that contains the directory that contains the licenses, output-release-x86, and output-debug-x86 directories.
In our example, this would be `C:\code\bzflag-dependencies\`. Once the environment variable has been created, log off
and back on or reboot for the change to take effect.

**For BZFlag 2.4.20+ and master (2.5):**

Create a "dependencies" directory alongside the src and include directories in the source root of BZFlag. Copy the
output-* and licenses directories to the dependencies directory in the BZFlag source root.

## Obtaining the code

**For BZFlag 2.4:**

Either download and extract the specific release source .zip from our [downloads archive](/downloads/archive/bzflag/)
or use Git to download the current 2.4 branch.

{% set command %}
git clone --branch 2.4 https://github.com/BZFlag-Dev/bzflag.git
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'windows', folder: 'code' } %}

**For BZFlag master (2.5):**

{% set command %}
git clone --branch master https://github.com/BZFlag-Dev/bzflag.git
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'windows', folder: 'code' } %}

## Building the code

The MSVC directory contains several Visual Studio solution files.
* fullbuild.sln - Includes the game client, server, server plugins, installer, and bzadmin
* bzflag.sln - Includes just the game client
* bzfs.sln - Includes just the server and plugins

Open the solution file of your choice. Navigate to the Build menu and choose Build Solution. The projects in your chosen
solution should build and will produce output in a directory such as bin_Debug_Win32.

## Debugging

If you need to debug both the client and server at the same time on the same computer, you can run two instances of
Visual Studio with one using bzflag.sln and the other using bzfs.sln. Both of these will also have the correct startup
project selected by default. If you use the fullbuild.sln solution, you will right click on either bzflag, bzadmin, or
bzfs in the Solution Explorer and choose "Set as StartUp Project".

Ensure that the software was compiled in Debug mode and *not* in Release mode. After that, debugger settings must be
configured. Right click on the project in the Solution Explorer and click on Properties. Select the Debugging item on
the left. Click into the value for the command, then click the down arrow on the right and select &lt;Browse...&gt;.
Navigate to the bin_Debug_Win32 directory at the root of the BZFlag source and double click on the corresponding
executable for your project (such as bzflag.exe for the bzflag project). Set the Working Directory to the
bin_Debug_Win32 directory.

Optionally, you may also specify Command Arguments. For the bzflag project, you may for instance wish to run the client
in a window instead of fullscreen, which can be accomplished with the `-window 800x600` arguments. That would run the
game in a window that is 800 pixels wide and 600 pixels high.

Once you have your values set, click OK to save the settings. You may then go to the Debug menu and choose Start
Debugging. We won't go into how debugging works as there are plenty of tutorials and documentation online for that,
including a [good overview from the Visual C++ Team Blog][vcdebug].

## More information

For more information, review the README.Windows and DEVINFO files from the source.

[msvc]: https://www.visualstudio.com/downloads/
[gitdl]: https://git-scm.com/downloads
[nsis]: https://nsis.sourceforge.io/Download
[vcdebug]: https://blogs.msdn.microsoft.com/vcblog/2017/04/10/c-debugging-and-diagnostics/
