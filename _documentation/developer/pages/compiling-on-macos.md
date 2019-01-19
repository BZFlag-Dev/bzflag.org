---
title: Compiling on macOS
docpath: compiling/macos
---

## Note

As of SDL 2.0.9, a bug still exists when building on newer macOS and Xcode versions (such as macOS 10.13 and Xcode 9)
that [prevents minimizing a fullscreen window][sdlbug1] We have success building on Mac OS X 10.10 with Xcode 7. We are
looking into a workaround that may allow building on modern macOS/Xcode.

## Dependencies

BZFlag uses Xcode and a several third-party dependencies to build on macOS.

* Xcode
* SDL 2.0.9+
* GLEW
* c-ares

### SDL

Download the [latest development library .dmg file][sdl] and open it.  Drag the SDL2.framework file into your
`/Library/Frameworks/` directory, which may require an administrator account to accomplish.

### GLEW

Download the [latest GLEW .tgz source release][glew] and extract the contents. Open a Terminal and `cd` into the glew
directory that was just created by extracting. Then run the following commands:

<div class="c-terminal" data-auto-os="false" data-os="macos">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/glew"></span>export MACOSX_DEPLOYMENT_TARGET=10.7<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/glew"></span>export GLEW_DEST=/usr/local<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/glew"></span>make glew.lib<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/glew"></span>sudo make install<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/glew"></span>sudo rm /usr/local/lib/libGLEW*.dylib
    </div>
</div>

### c-ares

Download the [latest c-ares source release][c-ares] and extract the contents. Open a terminal and `cd` into the c-ares
directory that was just created by extracting. Then run the following commands:

<div class="c-terminal" data-auto-os="false" data-os="macos">
    <div class="c-terminal__header">
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
        <span class="c-terminal__button"></span>
    </div>

    <div class="c-terminal__body">
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/c-ares"></span>export MACOSX_DEPLOYMENT_TARGET=10.7<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/c-ares"></span>./configure --disable-shared<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/c-ares"></span>make<br />
        <span class="c-terminal__prompt" aria-hidden="true" data-folder="~/c-ares"></span>sudo make install
    </div>
</div>

## Obtaining the code

**For BZFlag 2.4:**

Either download and extract the specific release source .tar.gz or .tar.bz2 from our
[downloads archive](/downloads/archive/bzflag/) or use Git to download the current 2.4 branch.

<div class="c-terminal" data-auto-os="false" data-os="macos">
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

<div class="c-terminal" data-auto-os="false" data-os="macos">
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

Nagivate to the Xcode directory of our source and open BZFlag.xcodeproj. This will launch Xcode. Go to the Product menu,
then to Scheme, and click on Edit Scheme. Under the Options tab, uncheck "Allow debugging when using document Versions
Browser".

By default we build in debug mode which leaves debugging symbols in the binaries and produces less optimized code. To
change this, navigate to the Product menu, then to Scheme, and click on Edit Scheme. Then in the left sidebar click on
the Run phase, and then the Info tab. Under Build Configuration, select the desired scheme of Debug or Release.

To build, select Build from the Product menu. If the build was successful, you can run the application from Xcode by
selecting the Product menu and clicking on Run.

To locate the .app you just created, access the Navigator panel and select the Project Navigator. Expand the "BZFlag"
project container and the "Targets" group within it. Click the "BZFlag.app" target. Make sure the Utilities page is
visible, and under the Identify and Type panel it will show the full path to the application. Click the small grey
right arrow at the bottom right corner of the path to reveal the application in the Finder.


## More information

For more information, review the README.MacOSX and DEVINFO files from the source.

[sdlbug1]: https://bugzilla.libsdl.org/show_bug.cgi?id=4177
[sdl]: https://www.libsdl.org/download-2.0.php
[glew]: https://github.com/nigels-com/glew/releases/latest
[c-ares]: http://c-ares.haxx.se
