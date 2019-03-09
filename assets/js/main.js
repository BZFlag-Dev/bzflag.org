"use strict";

const KB_Keys = {
    tab:   9,
    enter: 13,
    esc:   27,
    space: 32,
    up:    38,
    down:  40,
    home:  36,
    end:   35,
};

const BREAKPOINTS = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

const BREAKPOINT_NAMES = Object.keys(BREAKPOINTS);

/**
 * Get the 'respond-down' value of the current breakpoint.
 *
 * @returns {number}
 */
function currentBreakpoint() {
    for (let i = 0; i < BREAKPOINT_NAMES.length; i++) {
        const name = BREAKPOINT_NAMES[i];
        const breakpoint = BREAKPOINTS[name];

        if (window.matchMedia('(max-width: ' + (breakpoint - 0.02) + 'px)').matches) {
            return breakpoint - 0.02;
        }
    }

    return -1;
}

/**
 * Detect the OS the browser claims to be.
 *
 * @returns {string}
 */
function getOS() {
    // Source: https://stackoverflow.com/a/38241481
    // Author: Vladyslav Turak (https://stackoverflow.com/users/4815056/vladyslav-turak)
    // License: http://creativecommons.org/licenses/by-sa/3.0/
    const userAgent = window.navigator.userAgent,
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

/**
 * Toggle a string boolean on an element.
 *
 * @param {Element} element
 * @param {string} attribute
 */
function toggleBooleanString(element, attribute) {
    const value = element.getAttribute(attribute);

    element.setAttribute(attribute, value === 'true' ? 'false' : 'true');
}

// Add some helper classes to the DOM for some fancier features
//
//   - Detect the OS from CSS
//   - Detect JS usage from CSS

replaceDomClass('os-unknown', 'os-' + getOS());
replaceDomClass('no-js', 'js');

//
// Mobile menu support
//

const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        toggleBooleanString(this, 'aria-expanded');
    });
}

//
// Accordion elements
//

const accordionHeaders = document.querySelectorAll('[data-role="accordion"]');

const Accordion = function (element) {
    this.element = element;
    this.target = this.element.getAttribute('data-target');
    this.body = document.querySelector(this.target);

    let breakpoint = this.element.getAttribute('data-breakpoint');
    this.breakpoint = (BREAKPOINTS[breakpoint] - 0.02) || 0;

    this.clickCallback = (function (e) {
        let shouldProceed = false;

        if (e.type === 'keydown' && (e.keyCode === KB_Keys.enter || e.keyCode === KB_Keys.space)) {
            shouldProceed = true;
        }
        else if (e.type === 'click') {
            shouldProceed = true;
        }

        if (shouldProceed) {
            e.preventDefault();

            toggleBooleanString(this.element, 'aria-expanded');
        }
    }).bind(this);
};

Accordion.prototype.isActiveBreakpoint = function () {
    return currentBreakpoint() !== -1 && currentBreakpoint() <= this.breakpoint;
};

Accordion.prototype.makeAccordion = function () {
    if (!this.isActiveBreakpoint()) {
        this.disableAccordion();
        return;
    }

    this.element.setAttribute('aria-expanded', 'false');
    this.element.setAttribute('aria-controls', this.target);
    this.element.setAttribute('role', 'tab');
    this.element.setAttribute('tabindex', '0');

    this.element.addEventListener('click', this.clickCallback);
    this.element.addEventListener('keydown', this.clickCallback);

    this.body.setAttribute('role', 'tabpanel');
};

Accordion.prototype.disableAccordion = function () {
    this.element.removeAttribute('aria-expanded');
    this.element.removeAttribute('aria-controls');
    this.element.removeAttribute('role');
    this.element.removeAttribute('tabindex');

    this.element.removeEventListener('click', this.clickCallback);
    this.element.removeEventListener('keydown', this.clickCallback);

    this.body.removeAttribute('role')
};

const accordions = [];

for (let i = 0; i < accordionHeaders.length; i++) {
    const acc = new Accordion(accordionHeaders[i]);
    acc.makeAccordion();

    accordions.push(acc);
}

window.addEventListener('resize', function () {
    for (let i = 0; i < accordions.length; i++) {
        const accordion = accordions[i];

        accordion.makeAccordion();
    }
});
