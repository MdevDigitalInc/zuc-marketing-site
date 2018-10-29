// [ Hero Slider Controller ]
// Reserve global variables
var reviewLimit = null;
var reviewIndex = null;
var desiredIndex = null;
var resizeTimer = null;

(function(){

  // Make sure we are live and ready..
  $(document).ready(function() {
    // Check to make sure the review module is alive
    if ( $('#zuc-review-module') ) {
      // Initialize review module
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
      // Reinitialize reviews
      initializeReviews();
    },250);
  });


  function initializeReviews() {
    $('.--active-review').removeClass('--active-review');
    // Reserve Variable
    var reviewHeight = null;
    // Select the first of the vunch
    firstTarget = $('[data-review]')[0];
    // Make it Active
    $(firstTarget).addClass('--active-review');
    // Get height of first review..
    reviewHeight = $(firstTarget).height();
    // Set container to that height for absolute elements
    $('[data-review-container]').css({
      "height" : reviewHeight + 'px'
    });
    // Set review limit
    reviewLimit = $('[data-review]');
    reviewLimit = reviewLimit.length - 1;
    // Set Current active review
    reviewIndex = 0;
    desiredIndex = 0;
  }
})();


function traverseReview(direction) {
  // Container for height
  var newHeight = null;
  // Figure out which review to show..
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

  // Remove any active review classes...
  $('.--active-review').removeClass('--active-review');
  // Select the correct review based on the math above..
  desiredTarget = $('[data-review]')[desiredIndex];
  // Get height of next review
  newHeight = $(desiredTarget).height();
  // Set container to that height for absolute elements
  $('[data-review-container]').css({
    "height" : newHeight + 'px'
  });
  $(desiredTarget).addClass('--active-review');
}
