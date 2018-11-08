function changeMainImage(input) {
    
    $('.--active-image').removeClass('--active-image');
    // Select the correct review based on the math above..
    desiredTarget = $('[showcase-small]')[input];
    
    $(desiredTarget).addClass('--active-image');

    picture = $('[showcase-image]')[input]

    bigPicture = $('[showcase-big]')[0]

    bigPicture.src = picture.src;
    bigPicture.alt = picture.alt;
  }
