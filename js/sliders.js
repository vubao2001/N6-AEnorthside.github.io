// slider

$(document).ready(function () {
    $('#slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: false,
      nextArrow: false,
      // prevArrow: '<button type="button" class="slick-prev"><div class="button-prev"></div></button>',
      // nextArrow: '<button type="button" class="slick-next"><div class="button-next"></div></button>',
    });
  });
  
  $(document).ready(function () {
    $('.box-content').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          }
        },
      ]
    });
  });
  
  $(document).ready(function () {
    $('.cate--item').slick({
      dots: false,
      infinite: false,
      // speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      // swipe: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          }
        }
      ]
    });
  });
  
  $(document).ready(function () {
    $('.list--coupon').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          }
        },
      ]
    });
  });
  // --
  
  $(document).ready(function () {
    $('.feedback--content').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
    });
  });
  
  $(document).ready(function () {
    $('#thumblist_quickview').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      // autoplaySpeed: 2000,
      infinite: false,
      prevArrow: false,
      nextArrow: false,
    });
  });
  
  // end slider