document.addEventListener("DOMContentLoaded", function(){

    //burger

    const burgerBtn = document.querySelector('.header__top-burger');
    const burgerCloseBtn = document.querySelector('.burger-menu__close-btn');
    const burgerBlock = document.querySelector('.burger-menu');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    var kva = 0;

    burgerBtn.addEventListener('click', burger);
    burgerCloseBtn.addEventListener('click', burger);

    function burger() {
        if (kva === 0) {
            burgerBlock.style.display = 'block';
            header.style.borderBottomRightRadius = '0px';
            header.style.borderBottomLeftRadius = '0px';
            body.style.overflow = 'hidden';
            kva = 1;
            console.log('kvaOpen');
        } else if (kva === 1) {
            burgerBlock.style.display = 'none';
            header.style.borderBottomRightRadius = '10px';
            header.style.borderBottomLeftRadius = '10px';
            body.style.overflow = 'inherit';
            kva = 0;
            console.log('kvaClose');
        }
    }


    //accordion

    $('.accordion-title').each(function (idx, el) {
        $(el).click( function (e) {
            
            let cont = $(this).next('.accordion-content');
            cont.slideToggle(200);
            
            if (!$(this).hasClass('opened')) {
                cont.css('display',  'flex');
                $(this).addClass('opened');
            } else {
                $(this).removeClass('opened');
            }

        });
    });

    //shadow header

    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();
        let scrollHeight = $('header').innerHeight() + $('.head-slider__back').innerHeight();
        // debugger
        if ($('.head-slider__back').lenght) {
            if (scroll >= scrollHeight) {
                $("header").addClass("shadow");
            } else {
                $("header").removeClass("shadow");
            }
        } else {
            if (scroll > 0) {
                $("header").addClass("shadow");
            } else {
                $("header").removeClass("shadow");
            }
        }
        
    });

});