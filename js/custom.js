$( document ).ready(function() {


 $('.photo-book').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.courusel-book'
});
$('.courusel-book').slick({
  slidesToShow: 4,
  asNavFor: '.photo-book',
  dots: false,
  arrows: false,
  focusOnSelect: true
});


})
