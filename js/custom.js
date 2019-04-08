
$( document ).ready(function() {


$('.slick-magnific-gallery').slick({

  dots: false,
  arrows: false,
  infinite: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 5,

  responsive: [{
      breakpoint: 1300,
      settings: {
        slidesToScroll: 4,
        slidesToShow: 5
      }
    }, {
      breakpoint: 990,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 4
      }
    }, {
      breakpoint: 780,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 3
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2
      }
    }, {
      breakpoint: 350,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
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




    var men=true;
    $("#sandwich").click(function()
    {
      if(men==false)
      {
        $(".menu").slideUp();
        men=!men;
      }
      else
      {
        $(".menu").slideDown();
        men=!men;
      }
    });

      $("#sandwich, .menu_item").click(function() {
         $("#sandwich").toggleClass("active");
         $("#sandwich .sw_top").toggleClass("active");
    });


$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });



$(function(){
        $('[name="phone"]').mask("+7(999) 999-99-99");
        $('[name="main_phone"]').mask("+7(999) 999-99-99");
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
          $('[name="phone"]').focus();
         }
    });
    $("#modal-button-main").on("click", function(event){
      if(($('[name="main_phone"]').val()!='')&&($('[name="main_phone"]').val()!='+7(___)___-__-__')){
              call(this);
           }else{
            $('[name="main_phone"]').addClass('error');
            $('[name="main_phone"]').focus();
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


$("a.ancLinks").click(function () { 
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html,body').animate( { scrollTop: destination }, 400 );
  return false;
});


})
