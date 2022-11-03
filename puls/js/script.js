const slider = tns({
    container: '.carousel-wrapper',
    "items": 1,
    "center": true,
    "loop": true,
    "swipeAngle": false,
    "speed": 400,
    "nav": false,
    "controlsContainer": "#carousel-controls",
    "controls": false,
    "responsive": {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }

  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $(document).ready(function(){
    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    //tab_content_class_changing
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide ('.catalog-item__link');
    toggleSlide('.catalog-item_back');
    //modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thx, #order').fadeOut('slow');
    });

 
    //text replacment in order tab and show order tab
    $('.button_mini').each(function(i) {
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       minlength: 2,
    //       email: true
    //     }
    //   },
    //   messages: {
    //     name: { 
            
    //         required: "Пожалуйста введите имя",
    //         minlength: jQuery.validator.format("Введите {0} символом!")
    //     },
    //     phone: "Пожалуйста введите номер телефона",
    //     email: {
    //       required: "Пожалуйста введите адрес своей email почты",
    //       email: "Фотрмат почты должен быть: name@domain.com"
    //     }
    //   }
    // });

    // $('#order form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       minlength: 2,
    //       email: true
    //     }
    //   },
    //   messages: {
    //     name:  { 
            
    //       required: "Пожалуйста введите имя",
    //       minlength: jQuery.validator.format("Введите {0} символом!")
    //   },
    //     phone: "Пожалуйста введите номер телефона",
    //     email: {
    //       required: "Пожалуйста введите адрес своей email почты",
    //       email: "Фотрмат почты должен быть: name@domain.com"
    //     }
    //   }
    // });
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            minlength: 2,
            email: true
          }
        },
        messages: {
          name: { 
              
              required: "Пожалуйста введите имя",
              minlength: jQuery.validator.format("Введите {0} символом!")
          },
          phone: "Пожалуйста введите номер телефона",
          email: {
            required: "Пожалуйста введите адрес своей email почты",
            email: "Фотрмат почты должен быть: name@domain.com"
          }
        }
      });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    
    //phone mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");
      
    //отправка писем
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("inpput").val("");
        $('#consultation, #order').fadeOut('slow');
        $('.overlay, #thx').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    });
//smooth scroll and page up
    $(window).scroll(function() {
      if ($(this).scrollTop()>1200) {
          $('.pageup').fadeIn();

      } else {
        $('.pageup').fadeOut();
      }
    });
    $("a[href^='#'").click(function() {
      var _href=$(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

//animated WOW
  new WOW().init();
   });
  
