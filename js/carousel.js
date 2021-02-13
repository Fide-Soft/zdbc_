$('.owl-content-2').owlCarousel({
  center: true,
  loop:true,
  autoplay:false,
  items:1,
  autoHeight:true,
});

$('.owl-content-2-inside').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  dots: false,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      600:{
          items:4
      }
  }
});

$('.owl-content-4').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  autoHeight:true,
  responsive:{
      600:{
          items:3
      }
  }
});

owl.on('drag.owl.carousel', function(event) {
  $('body').css('overflow', 'hidden');
});

owl.on('dragged.owl.carousel', function(event) {
  $('body').css('overflow', 'auto');
});

$('.owl-content-2').on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
  $('.owl-content-2').trigger('next.owl');
} else {
  $('.owl-content-2').trigger('prev.owl');
}
e.preventDefault();
});

$(document).ready(function(){
$(".owl-carousel").owlCarousel();
});