// [ Hero Slider Controller ]
var reviewLimit = null;
var reviewIndex = null;
var desiredIndex = null;

(function(){

  // Make sure we are live and ready..
  $(document).ready(function() {
    // Check to make sure the review module is alive
    if ( $('#zuc-review-module') ) {
      initializeReviews();
    }
  });
  // Resize Events (debounced)
  // -----------------------------
  $(window).on('resize', function(e) {
    // Clear Timer
    clearTimeout(resizeTimer);
    // Fire function after 250ms
    resizeTimer = setTimeout(function() {
      // Normalize Dropdowns Again...
      normalizeSlider();
    },250);
  });

  function initializeReviews() {
    // Select the first of the vunch
    firstTarget = $('[data-review]')[0];
    // Make it Active
    $(firstTarget).addClass('--active-review');
    // Set review limit
    reviewLimit = $('[data-review]');
    reviewLimit = reviewLimit.length - 1;
    // Set Current active review
    reviewIndex = 0;
    desiredIndex = 0;
  }
})();


function traverseReview(direction) {
  $('.--active-review').removeClass('--active-review');

  // Are we going passed the end of the array?
  if (direction + desiredIndex > reviewLimit) {
    // Reset to start
    desiredIndex = 0;
  }
  // Are we going passed the start of the array?
  else if (direction + desiredIndex < 0) {
    // Reset to the end
    desiredIndex = reviewLimit;
  }
  else {
    // Move as desired
    desiredIndex += direction;
  }

  desiredTarget = $('[data-review]')[desiredIndex];
  $(desiredTarget).addClass('--active-review');
  console.log(desiredIndex);
  console.log(desiredTarget);
}
