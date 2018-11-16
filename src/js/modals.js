// [ Modal Engine ]
//
// -------------------------
//
// Open Modal Target
function toggleModal(modalTarget) {
  // Toggle Class on Modal
  $(modalTarget).toggleClass('zuc-modal-active');
  // Pause any video that might be playing
  $('video').trigger('pause');
};
