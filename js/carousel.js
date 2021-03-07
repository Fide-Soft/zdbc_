$(".owl-content-2").owlCarousel({center:!0,loop:!0,autoplay:!1,items:1,autoHeight:!0}),$(".owl-content-2-inside").owlCarousel({center:!0,items:2,loop:!0,margin:10,dots:!1,autoplay:!0,autoplayTimeout:1e3,autoplayHoverPause:!0,responsive:{600:{items:4}}}),$(".owl-content-4").owlCarousel({center:!0,items:2,loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,autoHeight:!0,responsive:{600:{items:3}}});
var owl = $('.owl-carousel');
owl.on('drag.owl.carousel', function(event) {
    $('body').css('overflow', 'hidden');
});
owl.on('dragged.owl.carousel', function(event) {
    $('body').css('overflow', 'auto');
});