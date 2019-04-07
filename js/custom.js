
$( document ).ready(function() {


$('.slick-magnific-gallery').slick({
  slidesToShow: 6,
  asNavFor: '.photo-book',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 4
      }
    }
    ]
});



$(function(){
        $('[name="phone"]').mask("+7(999) 999-99-99");
    });

    function call(ev) {
    var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
      alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
        
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }else{
          $('[name="phone"]').addClass('error');
         }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });


})
