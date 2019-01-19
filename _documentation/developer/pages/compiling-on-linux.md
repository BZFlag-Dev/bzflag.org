---
title: Compiling on Linux
docpath: compiling/linux
---

## Dependencies

BZFlag uses a number of third-party build tools and libraries to build on Linux. Much of this info will also apply to
other *nix like operating systems such as the various BSDs.
* GNU gcc/g++
* automake 1.6.0+
* autoconf 2.68+
* libtool 1.4.2+
* make
* c-ares
* glew
* ncurses
* SDL 1.2.10+ or 2.0.3+
* zlib

### Debian/Ubuntu (and other Debian-based distributions)

**SDL 1.2.10+:**

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-admin="true" data-folder="~"></span>apt-get install g++ automake autoconf libtool
        libgl1-mesa-dev libglu1-mesa-dev libcurl3-dev libc-ares-dev zlib1g-dev libncurses-dev libglew-dev make
        libsdl1.2-dev libsdl-sound1.2-dev
    </div>
</div>

**SDL 2.0.3+:**

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-admin="true" data-folder="~"></span>apt-get install g++ automake autoconf libtool
        libgl1-mesa-dev libglu1-mesa-dev libcurl3-dev libc-ares-dev zlib1g-dev libncurses-dev libglew-dev make
        libsdl2-dev
    </div>
</div>

### Fedora

**SDL 1.2.10+:**

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-admin="true" data-folder="~"></span>dnf install gcc-c++ libtool c-ares-devel
        libcurl-devel mesa-libGL-devel mesa-libGLU-devel ncurses-devel zlib-devel SDL-devel
    </div>
</div>

**SDL 2.0.3+:**

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-admin="true" data-folder="~"></span>dnf install gcc-c++ libtool c-ares-devel
        libcurl-devel mesa-libGL-devel mesa-libGLU-devel ncurses-devel zlib-devel SDL2-devel
    </div>
</div>

### CentOS
<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-admin="true" data-folder="~"></span>yum install gcc-c++ libtool c-ares-devel
        libcurl-devel mesa-libGL-devel mesa-libGLU-devel ncurses-devel SDL-devel zlib-devel 
    </div>
</div>

## Obtaining the code

**For BZFlag 2.4:**

Either download and extract the specific release source .tar.gz or .tar.bz2 from our
[downloads archive](/downloads/archive/bzflag/) or use Git to download the current 2.4 branch.

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~"></span>git clone --branch 2.4 https://github.com/BZFlag-Dev/bzflag.git
    </div>
</div>

**For BZFlag master (2.5):**

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~"></span>git clone --branch master https://github.com/BZFlag-Dev/bzflag.git
    </div>
</div>

## Building the code

First, change to the bzflag directory (adjusting if necessary) and then run our autogen.sh script. If you later modify
any of the Makefile.am files, you must re-run the autogen.sh script (and configure).

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~"></span>cd bzflag<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/bzflag"></span>./autogen.sh
    </div>
</div>

The next step will be running the configure script, which will check that the build system works and that the necessary
dependencies are available.

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/bzflag"></span>./configure
    </div>
</div>

There are also various options for the configure script. Some common options include:
* `--enable-debug` - This leaves the binaries unoptimized and with debugging symbols, and makes it possible to use a
  debugger like GDB to inspect and diagnose issues and crashes.
* `--disable-client` - Do not build the graphical game client. With this option enabled, glew and SDL are not required.
* `--disable-bzadmin` - Do not build the text-based game client. With this option enabled, ncurses is not required.
* `--enable-custom-plugins=plugin1[,plugin2,...]` - Build additional plugins.
* `--prefix=someDirectoryPath` - Install the game files into an alternative location, such as your home directory.

The following example would build with debugging enabled but skip building the graphical game client, and would also
build two additional plugins. When `make install` is called, it would then install the files into `$HOME/bz2.4/` instead
of in a system-wide directory, which would mean it would not need root access to install.

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/bzflag"></span>./configure --enable-debug --disable-client
        --enable-custom-plugins=somePlugin,someOtherPlugin --prefix=$HOME/bz2.4/
    </div>
</div>

Once configured, just run:

<div class="c-terminal" data-auto-os="false" data-os="linux">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/bzflag"></span>make
    </div>
</div>

## More information

For more information, review the README.Linux and DEVINFO files from the source.
