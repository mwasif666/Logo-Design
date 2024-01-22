$(document).ready(function () {

  // MOBILE-NAVIGATION-LIST

  $('.navigation-list').clone().appendTo('.mobile-menu-body');

  $('.hamburger').on('click', function () {
    if (!$('.mobile-menu').hasClass('mobile-view')) {
      $('.mobile-menu').addClass('mobile-view');
    } else {
      $('.mobile-menu').removeClass('mobile-view');
    }
  });

  $('#menu-close').on('click', function () {
    $('.mobile-menu').removeClass('mobile-view');
    $('.dropdown-li').removeClass('open');
    $('.dropdown-li').find('>.dropdown-list').hide(200);
  });

  $('.mobile-menu .dropdown-li>a').append('<i class="fa fa-angle-right"></i>')

  $('.mobile-menu .dropdown-li>a').click(function () {
    const parent = $(this).parent('.dropdown-li');
    if (!parent.hasClass('open')) {
      const ulParent = parent.parent();
      ulParent.find('.dropdown-li.open').find('>.dropdown-list').hide(200);
      ulParent.find('.dropdown-li.open').removeClass('open');
      parent.addClass('open');
      parent.find('>.dropdown-list').show(200);
    } else {
      parent.removeClass('open');
      parent.find('>.dropdown-list').hide(200);
    }
  });


  // SCROLL JS

  // $('.scroller').mCustomScrollbar();

  // WOW JS

  new WOW().init();

  // REVIEW SLIDER JS


  
 

  $('.testimional-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '20px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});