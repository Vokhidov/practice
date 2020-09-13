$(document).ready(function(){
    $("#advices-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeOut: 1000,
            dots: false,
            lazyLoad: true,
            navText : ["<i class='fa fa-arrow-left carousel-icon'></i>","<i class='fa fa-arrow-right carousel-icon'></i>"],
            smartSpeed: 3000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:true,
                }
            }
        }
    );
    $("#partners-carousel").owlCarousel(
        {
            loop:true,
            items: 5,
            margin:10,
            autoplay: true,
            nav: false,
            dots: true,
            lazyLoad: true,
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    dots:true,
                },
                600:{
                    items:5,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:false,
                    dots:true,
                    loop:true,
                }
            }
        }
    );
    $("#useful-carousel").owlCarousel(
        {
            loop:true,
            items: 3,
            margin:10,
            nav:false,
            autoplay: true,
            autoplayTimeOut: 2000,
            dots: true,
            lazyLoad: true,
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots:true,
                },
                600:{
                    items:3,
                    nav:false,
                    dots:true,
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:true,
                    dots:true,
                }
            }
        }
    )
  });
