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

// Import all files from folder given regex
function importAll(r) {
  return r.keys().map(r);
}

// Import all fonts
const fonts = importAll(require.context('./assets/fonts', false, /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/));

// Import Image
const headerBg = require( './assets/images/shapes/hero-wave-shape.svg' );
const sliderBg = require( './assets/images/shapes/hero-slider-bg.svg' );
const secBgImg = require( './assets/images/shapes/footer-blob.svg' );
const pcBgImg = require( './assets/images/smarter-products/woman-sleeper-stretching.png' );
const slpHeroBgImg = require ( './assets/images/smarter-living/hero-background.png' );
const srvHeaderAppl = require ( './assets/images/service-plans/woman-laundry-blue-header.png' );
const srvHeaderFurn = require ( './assets/images/service-plans/father-son-laughing-blue-header.png' );
const srvHeaderSys = require ( './assets/images/service-plans/front-house-blue-header.png' );
const slbHeader = require ( './assets/images/smarter-living/interior-house-header.png');
const BlogModule = require ( './assets/images/shared/baby-bath.png');
const ecomSliderImg = require ( './assets/images/ecom/header-whole-home-plan.png');
const SLFeaturedImage = require ( './assets/images/shared/couple-on-computer.png');
const SLBFeaturedImage = require ( './assets/images/shared/woman-online-purchase.png');

// About Images
const aboutHero = require ( './assets/images/about/zucora-home-building.png' );
const aboutBrad = require ( './assets/images/about/about-team-brad.png' );
const aboutAshleigh = require ( './assets/images/about/about-team-ashleigh.png' );
const aboutDavid = require ( './assets/images/about/about-team-david.png' );
const aboutJim = require ( './assets/images/about/about-team-jim.png' );
const aboutMagda = require ( './assets/images/about/about-team-magda.png' );
const aboutMichelle = require ( './assets/images/about/about-team-michelle.png' );
const aboutMindy = require ( './assets/images/about/about-team-mindy.png' );
const aboutOksana = require ( './assets/images/about/about-team-oksana.png' );
const aboutTrevor = require ( './assets/images/about/about-team-trevor.png' );
const aboutColleen = require ( './assets/images/about/about-team-colleen.png' );

// Nav Images
const navSp = require ( './assets/images/nav/service-plans.png' );
const navShp = require ( './assets/images/nav/smarter-home-products.png' );
const navSl = require ( './assets/images/nav/smarter-living.png' );
// Sliders
const slider1 = require ( './assets/images/homepage/slider-img-1.png' );
const slider2 = require ( './assets/images/homepage/slider-img-2.png' );
const slider3 = require ( './assets/images/homepage/slider-img-3.png' );
