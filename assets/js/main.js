"use strict";

/**
 * Detect the OS the browser claims to be.
 *
 * @returns {string}
 */
function getOS() {
    // Source: https://stackoverflow.com/a/38241481
    // Author: Vladyslav Turak (https://stackoverflow.com/users/4815056/vladyslav-turak)
    // License: http://creativecommons.org/licenses/by-sa/3.0/
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'macos';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'windows';
    } else if (/Android/.test(userAgent)) {
        return 'android';
    } else if (/Linux/.test(platform)) {
        return 'linux';
    }

    return 'unknown';
}

/**
 * Replace a class in the root `<html>` element.
 *
 * @param {string|RegExp} find
 * @param {string} replace
 */
function replaceDomClass(find, replace) {
    document.documentElement.className = document.documentElement.className.replace(find, '') + ' ' + replace + ' ';
}

// Add some helper classes to the DOM for some fancier features
//
//   - Detect the OS from CSS
//   - Detect JS usage from CSS

replaceDomClass('os-unknown', 'os-' + getOS());
replaceDomClass('no-js', 'js');

// Mobile menu support
var menuToggle = document.querySelector('#menu-toggle');
var navigation = document.querySelector('#navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        var ariaAttr = this.getAttribute('aria-expanded');

        this.setAttribute('aria-expanded', ariaAttr === 'true' ? 'false' : 'true');
    });
}
