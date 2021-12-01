document.addEventListener("DOMContentLoaded", function(){
    
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

    const toggleAboutBtn = document.querySelector('.about-and-review__toggle-about');
    const toggleReviewBtn = document.querySelector('.about-and-review__toggle-review');
    const aboutBlock = document.querySelector('.about');
    const reviewBlock = document.querySelector('.review');
    if (toggleAboutBtn) {
        toggleAboutBtn.addEventListener('click', toggleAbout);
    }

    if (toggleReviewBtn) {
        toggleReviewBtn.addEventListener('click', toggleReview);
    }

    function toggleAbout() {
        toggleAboutBtn.classList.remove('active');
        toggleAboutBtn.classList.add('active');
        toggleReviewBtn.classList.remove('active');
        aboutBlock.style.display = 'block';
        reviewBlock.style.display = 'none';
    }
    function toggleReview() {
        toggleAboutBtn.classList.remove('active');
        toggleReviewBtn.classList.remove('active');
        toggleReviewBtn.classList.add('active');
        aboutBlock.style.display = 'none';
        reviewBlock.style.display = 'block';
    }


    // about slider

    const aboutSlider = document.querySelector('.about__slider');
    const aboutSlider_scroller = aboutSlider.querySelector('.about__slider-container');
    const aboutSlider_item_size = aboutSlider_scroller.querySelector('img').clientWidth;

    aboutSlider.querySelector('.about-slider__btn-right').addEventListener('click', aboutSliderScrollToNextPage);
    
    aboutSlider.querySelector('.about-slider__btn-left').addEventListener('click', aboutSliderScrollToPrevPage);

    function aboutSliderScrollToNextPage() {
        aboutSlider_scroller.scrollBy(aboutSlider_item_size, 0);
    }
    function aboutSliderScrollToPrevPage() {
        aboutSlider_scroller.scrollBy(-aboutSlider_item_size, 0); 
    }

    aboutSlider_scroller.onscroll = (event) => {
        let found = false;
        aboutSlider_scroller.querySelectorAll('img')
        .forEach(div=>{
            if(!found && div.getBoundingClientRect().left >= 0){
                found = true;
                div.classList.add('active');
                return;
            }
            div.classList.remove('active');
        });
    }

    aboutSliderScrollToNextPage();



    // head slider

    const headSlider = document.querySelector('.head-slider__back');
    const headSlider_scroller = headSlider.querySelector('.head-slider__slider');
    const headSlider_item_size = headSlider_scroller.querySelector('img').clientWidth;

    headSlider.querySelector('.head-slider__slider-btn-right').addEventListener('click', headSliderScrollToNextPage);
    
    headSlider.querySelector('.head-slider__slider-btn-left').addEventListener('click', headSliderScrollToPrevPage);

    function headSliderScrollToNextPage() {
        headSlider_scroller.scrollBy(headSlider_item_size, 0);
    }
    function headSliderScrollToPrevPage() {
        headSlider_scroller.scrollBy(-headSlider_item_size, 0); 
    }

    headSlider_scroller.onscroll = (event) => {
        let found = false;
        headSlider_scroller.querySelectorAll('img')
        .forEach(div=>{
            if(!found && div.getBoundingClientRect().left >= 0){
                found = true;
                div.classList.add('active');
                return;
            }
            div.classList.remove('active');
        });
    }

    headSliderScrollToNextPage();

    //accprdion

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


