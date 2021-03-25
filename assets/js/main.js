(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]
1.page preloader
2.project active jquery
3.Data images
4.js popup search box effect
5.slider one active code
6.slider two active code
7.testimonial active code
8.blog active code
9.partner logo active code
10.team active code
11.blog slider active code
12.menu jquery mobile code
13.google map activation code
14.google map activation code
15.wow js active
16.scrollUp js active
17.Counter up activation active
18.sticky menu activation active
-------------------------------------------------------------------*/


$(window).on('load', function() {

  //1.page preloader
  //-----------------------
  setTimeout(() => {
		$('#preloader').fadeOut(1500);
  }, 3000);
  

  //2.project active jquery 
  //---------------------
  $('#Container .container .row').mixItUp();
}); // END load Function 

$(document).ready(function() {

    // 3.Data images
    //----------------------------------
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }

    //4.js popup search box effect
    //----------------------------------
    $('.btn-search-form-toggle').on('click', function () {
        $("#popup-search-box-area").toggleClass('search-form-show');
    });

    //5.slider one active code
    //----------------------------------
     if ($('.slider-one-area.owl-carousel, .about-image.owl-carousel').length > 0) {
        $('.slider-one-area.owl-carousel, .about-image.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
        });
    }

    //6.slider two active code
    //----------------------------------
     if ($('.slider-two-area.owl-carousel').length > 0) {
        $('.slider-two-area.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
        });
    }

    //7.testimonial active code
    //----------------------------------
     if ($('.testimoial-slider.owl-carousel').length > 0) {
        $('.testimoial-slider.owl-carousel').owlCarousel({
            loop: true,
            items: 2,
            autoplay: false,
            nav: false,
            dots: true,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                600:{
                    items:1,
                    margin:0
                },
                991:{
                  items:2,
                },
                1200:{
                  items:2
                }
            }
        });
    }
    //8.blog active code
    //----------------------------------
     if ($('.blog-slider.owl-carousel,.related-product-slider.owl-carousel').length > 0) {
        $('.blog-slider.owl-carousel,.related-product-slider.owl-carousel').owlCarousel({
            loop: true,
            items: 3,
            autoplay: true,
            nav: false,
            dots: true,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                600:{
                    items:1,
                    margin:0
                },
                991:{
                  items:2,
                },
                1200:{
                  items:3
                }
            }
        });
    }
    //9.partner logo active code
    //----------------------------------
     if ($('.partner-slider.owl-carousel').length > 0) {
        $('.partner-slider.owl-carousel').owlCarousel({
            loop: true,
            items: 5,
            autoplay: true,
            nav: false,
            dots: false,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                600:{
                    items:2,
                    margin:0
                },
                991:{
                  items:3,
                },
                1200:{
                  items:5
                }
            }
        });
    }
    //10.team active code
    //----------------------------------
     if ($('.team-slider.owl-carousel').length > 0) {
        $('.team-slider.owl-carousel').owlCarousel({
            loop: true,
            items: 4,
            autoplay: true,
            nav: false,
            dots: true,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                480:{
                  items:1,
                  margin:30
                },
                767:{
                    items:2,
                    margin:30
                },
                991:{
                  items:3,
                },
                1200:{
                  items:4
                }
            }
        });
    }

    //11.blog slider active code
    //----------------------------------
    if ($('.blog-slide.owl-carousel').length > 0) {
        $('.blog-slide.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
        });
    }

    //12.menu jquery mobile code
    //----------------------------------
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 350,
        closingDelay: 50,
        position: 'right',
        sticky: false
    });


    //13.google map activation code
    //----------------------------------

    if ($('#gmap').length > 0) {
      new GMaps({
        div: '#gmap',
        lat: -37.8173234, // 37.8173234,144.9537353
        lng: 144.9537353,
        scrollwheel: false,				
        styles: [
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          }
        ]
      }).addMarker({
        lat: -37.8173234, //23.792930, 90.403798
        lng: 144.9537353,
        infoWindow: {
          content: '<p> Radontheme, Bangladesh</p>'
        }
        });

    }

    //14.google map activation code
    //----------------------------------

    $('.popup-link').magnificPopup({
      type: 'image',
      gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          },	
      });
      if ($('.video-popup').length > 0) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    /*15.wow js active
    ============================*/
    new WOW().init();

    /*16.scrollUp js active
    ============================*/

    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });

    /*17.Counter up activation active
    ================================================*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });


    /*18.sticky menu activation active
    ================================================*/
    $(window).on('scroll', function() {
      if( $(window).scrollTop()>200 ){
        $('#sticky').addClass('stick');
        } else {
        $('#sticky').removeClass('stick');
      }
    }); 


}); // end ready function

})(jQuery);