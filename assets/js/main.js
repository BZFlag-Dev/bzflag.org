"use strict";

/**
 * Detect the OS the browser claims to be.
 *
 * @returns {string}
 */
function guessOS() {
    if (navigator.appVersion.indexOf('Win') !== -1) {
        return 'Windows';
    }

    if (navigator.appVersion.indexOf('Mac') !== -1) {
        return 'macOS';
    }

    if (navigator.appVersion.indexOf('X11') !== -1) {
        return 'UNIX';
    }

    if (navigator.appVersion.indexOf('Linux') !== -1) {
        return 'Linux';
    }

    return 'Unknown';
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

replaceDomClass('os-unknown', 'os-' + guessOS().toLowerCase());
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
