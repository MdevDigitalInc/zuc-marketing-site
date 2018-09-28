// [ Hero Slider Controller ]
(function(){
  var desiredSlide = null;
  var resizeTimer;
  // Make sure we are live and ready..
  $(document).ready(function() {
    // Normalize Container
    normalizeSlider();

    $('[data-move-slide]').click(function(){
      // Only trigger if user clicks an inactive icon
      if (!$(this).hasClass('--active')) {
        // Get value of attribute
        desiredSlide =  $(this).attr('data-move-slide');
        // Remove active status from the old mark..
        $('[data-move-slide]').removeClass('--active');
        $('[data-slide]').removeClass('--active-slide');
        // Add active status to current mark
        $(this).addClass('--active');
        $('[data-slide=' + desiredSlide + ']').addClass('--active-slide');
      }
    });
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

  // Fix height of container based on contents
  function normalizeSlider() {
    containerHeight = $('[data-slide]')[0].getBoundingClientRect().height;
    $('[data-slide-container]').css({
      'height': containerHeight + 'px'
    });
  };
})();
