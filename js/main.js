$(() => {
  $('.firstSlider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplaySpeed: true,
    animateOut: 'fadeOut',
    rewind: true,

    responsive: {
      0: {
        items: 1
      }
    }
  })

  $('.sliderAbout').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    nav: true,
    autoplayHoverPause: true,
    navText: ["<i style='font-size:1.4em;' class='fa fa-chevron-left'></i>", "<i style='font-size:1.4em;' class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
        dotsEach: 1
      },
      600: {
        items: 2,
        slideBy: 1,
        dotsEach: 2
      },
      1000: {
        items: 3,
        slideBy: 2,
        dotsEach: 2
      }
    }
  })
  $('.sliderGallery2').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    nav: true,
    autoplayHoverPause: true,
    navText: ["<i style='font-size:1.4em;' class='fa fa-chevron-left'></i>", "<i style='font-size:1.4em;' class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
        dotsEach: 1
      },
      600: {
        items: 1,
        slideBy: 1,
        dotsEach: 1
      },
      1000: {
        items: 1,
        slideBy: 1,
        dotsEach: 1
      }
    }
  })
});