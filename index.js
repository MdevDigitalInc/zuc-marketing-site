// SASS Boilerplate - Entry Point

//require('./src/styles/global-main.scss');

const sassStyles = require( './assets/styles/global-main.scss' );

// Require Images for use in BKG images [ Work Around ]
// ---------------------------------------------------
// When using BKG images we must first require the images
// via this file so they will be compiled. Pug seems unable to
// interpolate on style attribute tag.
//
// When you call the image use the relative path to the build root, in this case
// dist is root. Your image path should look something like
// ./images/image-name.xt
//
//const imagename = require( './assets/images/favicon2.png' );

module.exports = sassStyles;

window.console.log('Build Completed');
