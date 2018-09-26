// [ Hero Slider Controller ]
//
(function(){
  var desiredSlide = null;
  // Make sure we are live and ready..
  $(document).ready(function() {
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
})();
