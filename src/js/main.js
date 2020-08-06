$(function (){
    // Слайдер в на странице продукта
    $('.product-main-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.product-nav-slider__wrap').slick({
        //slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        asNavFor: '.product-main-slider',
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: $('.product-nav-slider .slider-prev'),
        nextArrow: $('.product-nav-slider .slider-next'),
    });

    // Кнопка больше на странице продукта 
    $('.product-info-box_min .down-btn').click(function (){
        $(this).toggleClass('down-btn_active');
        $(this).parent('.product-info-box__body').toggleClass('product-info-box__body_active');
        
        if($(this).hasClass('down-btn_active')) {
            $('.down-btn-text').text('Закрыть');
        } else {
            $('.down-btn-text').text('Открыть');
        }
    });

    // Слайдер на страницу о нас
    $('.article-section-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        //adaptiveHeight: true
    });

    //Скролл на странице о нас
    $(".history-inner").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 60);
        event.preventDefault();
    });

    
    // Каталог табы

    // $('.catalog-tabs-content li').on('mouseover', function () {
    //     $(this).each(function () {
    //         $.each(this.attributes, function (i, a) {
    //             if (a.name.indexOf('data-catalog-') + 1) {
    //                dataAttr = a.name.replace('class', '');
    //             }
    //             $('.catalog-tabs li').removeClass('active');
    //             $('.catalog-tabs li').filter('[' + dataAttr + ']').addClass('active');
    //         });
    //     });
    //     $('.catalog-tabs-content li').removeClass('active');
    //     $(this).addClass('active');
    // });

    // $('.catalog-tabs li').on('mouseover', function () {
    //     $(this).each(function () {
    //         $.each(this.attributes, function (i, a) {
    //             if (a.name.indexOf('data-product-') + 1) {
    //                 dataAttr = a.name.replace('class', '');
    //             }
    //             console.log(dataAttr);
    //             $('.catalog-tabs-content li').removeClass('active');
    //             $('.catalog-tabs-content li').filter('[' + dataAttr + ']').addClass('active');
    //         });
    //     });
    //     $('.catalog-tabs li').removeClass('active');
    //     $(this).addClass('active');

    // });


    function filterCatalog(hoverElem, highLightElem, dataStr){
        hoverElem.on('mouseover', function () {
            $(this).each(function () {
                $.each(this.attributes, function (i, a) {
                    if (a.name.indexOf(dataStr) + 1) {
                        dataAttr = a.name.replace('class', '');
                    }
                    highLightElem.removeClass('active');
                    highLightElem.filter('[' + dataAttr + ']').addClass('active');
                });
            });
            hoverElem.removeClass('active');
            $(this).addClass('active');
        });
    }


    filterCatalog($('.catalog-tabs-content li'), $('.catalog-tabs li'), 'data-catalog-');
    filterCatalog($('.catalog-tabs li'), $('.catalog-tabs-content li'), ('data-product-'));



    /* 
    ======== Модальные окна ========
    */
   // Закрыть на крестик или мимо
   $('.modal-close, .modal').on("click", function (e) {
       e.preventDefault();
       $(this).closest('.modal').addClass('closed');

   })
    // Отменяем нажатие на родителя при клике на модалку
   $('.modal-area').on("click",function (e) {
        e.stopPropagation();
   });

   // Открытие модальных окон
   $('.open-modal-form').on("click",function (e) {
        $('#modal-form').removeClass('closed');
   })
   $('.open-modal-thanks').on("click",function (e) {
        $('#modal-thanks').removeClass('closed'); 
    })
   
    /* 
    ======== Мобильно меню ========
    */
   // Открытие закрытие
   $('#burger').on("click", function () {
       $('#mob-menu').toggleClass('menu-closed');
   })

   // Отмена перехода по ссылке, которая раскрывается
   $('.mob-menu-a').on("click", function (e) {
       // Если есть дочернее меню, то НЕ переходим по ссылке
       if($(this).siblings('.sub-menu-mob').length > 0) {
        e.preventDefault();
        $(this).siblings('.sub-menu-mob').slideToggle();
       }
        
   });
   

    /* 
    ======== Аккордеон ========
    */
   
    // $('input[name="tab-group"]').on("click", function(el){
    //     // Запоминаем prop элемента 
    //     var currentProp = $(this).prop('checked');
    //     // Делаем у всех эдементов false(чтобы закрыть)
    //     $('input[name="tab-group"]').prop('checked',false);
    //     // Возвращаем нашему элементу prop
    //     $(this).prop('checked', currentProp);

    //     if($(this).prop('checked')) {
                
    //         $(this).siblings('.tab-content').slideDown();
    //     }else {
    //         $(this).siblings('.tab-content').slideUp();
    //     } 
    // })

     $('input[name="tab-group"]').on("click", function(el){
        // Запоминаем prop элемента 
        var currentProp = $(this).prop('checked');
        // Делаем у всех эдементов false(чтобы закрыть)
        $('input[name="tab-group"]').prop('checked',false);
        // Возвращаем нашему элементу prop
        $(this).prop('checked', currentProp);

        $('input[name="tab-group"]').each(function (){
            console.log($(this).prop('checked'));
            
            if($(this).prop('checked')) {
                $(this).siblings('.tab-content').slideDown();
            }else {
                $(this).siblings('.tab-content').slideUp();
            } 
        });
        
    })

    /* 
    ======== Блок с текстом ПОДРОБНЕЕ (где продукт, реализовано не здесь) ========
    */
   $('.textmore__box').on('click', function(){
       console.log('10');
       
       $(this).siblings('.textmore__box-body').toggleClass('textmore__box-body--active');
   })

});
