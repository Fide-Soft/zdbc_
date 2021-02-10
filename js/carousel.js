$('.loop').owlCarousel({
  center: true,
  loop:true,
  autoplay:false,
  items:1,
  autoHeight:true,
});

$('.loop').on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
  $('.loop').trigger('next.owl');
} else {
  $('.loop').trigger('prev.owl');
}
e.preventDefault();
});

$(document).ready(function(){
$(".owl-carousel").owlCarousel();
});