"use strict";

// Replace the default `no-js` class with `js` to help with any JS-specific CSS
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

// Mobile menu support
var menuToggle = document.querySelector('#menu-toggle');
var navigation = document.querySelector('#navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        var ariaAttr = this.getAttribute('aria-expanded');

        this.setAttribute('aria-expanded', ariaAttr === 'true' ? 'false' : 'true');
    });
}
