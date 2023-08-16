---
title: Compiling on Linux
docpath: compiling/linux/
---

## Dependencies

BZFlag uses a number of third-party build tools and libraries to build on Linux. Much of this info will also apply to
other *nix like operating systems such as the various BSDs.
* C++11 compiler such as GNU gcc/g++
* automake 1.6.0+
* autoconf 2.68+
* libtool 1.4.2+
* make
* c-ares
* curl
* glew
* ncurses
* SDL 2.0.9+
* zlib

BZFlag master (2.5) additionally requires:
* glm
* libpng

### Debian/Ubuntu (and other Debian-based distributions)

**For BZFlag 2.4:**

{% set command %}
apt install g++ automake autoconf libtool make libc-ares-dev libcurl3-dev libglew-dev libncurses-dev libsdl2-dev zlib1g-dev
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, admin: true, os: 'linux', folder: '~' } %}

**For BZFlag master (2.5):**

{% set command %}
apt install g++ automake autoconf libtool make libc-ares-dev libcurl3-dev libglew-dev libncurses-dev libsdl2-dev zlib1g-dev libglm-dev libpng-dev
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, admin: true, os: 'linux', folder: '~' } %}

### Fedora

**For BZFlag 2.4:**

{% set command %}
dnf install gcc-c++ libtool c-ares-devel libcurl-devel glew-devel ncurses-devel SDL2-devel zlib-devel
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, admin: true, os: 'linux', folder: '~' } %}

**For BZFlag master (2.5):**

{% set command %}
dnf install gcc-c++ libtool c-ares-devel libcurl-devel glew-devel ncurses-devel SDL2-devel zlib-devel glm-devel libpng-devel
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, admin: true, os: 'linux', folder: '~' } %}

## Obtaining the code

**For BZFlag 2.4:**

Either download and extract the specific release source .tar.gz or .tar.bz2 from our
[downloads archive](/downloads/archive/bzflag/) or use Git to download the current 2.4 branch.

{% set command %}
git clone --branch 2.4 https://github.com/BZFlag-Dev/bzflag.git
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux', folder: '~' } %}

**For BZFlag master (2.5):**

{% set command %}
git clone --branch master https://github.com/BZFlag-Dev/bzflag.git
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux', folder: '~' } %}

## Building the code

First, change to the ```bzflag``` directory (adjusting if necessary) and then run our autogen.sh script. If you later modify
any of the Makefile.am files, you must re-run the autogen.sh script (and configure).

{% set command = [
  { folder: '~', command: 'cd bzflag' },
  { folder: '~/bzflag', command: './autogen.sh' },
] %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux' } %}

The next step will be running the configure script, which will check that the build system works and that the necessary
dependencies are available.

{% set command %}
./configure
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux', folder: '~/bzflag' } %}

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

{% set command %}
./configure --enable-debug --disable-client --enable-custom-plugins=somePlugin,someOtherPlugin --prefix=$HOME/bz2.4/
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux', folder: '~/bzflag' } %}

Once configured, just run:

{% set command %}
make
{% endset %}

{% include '_includes/terminal.html.twig' with { command: command, os: 'linux', folder: '~/bzflag' } %}

## More information

For more information, review the README.Linux and DEVINFO files from the source.
