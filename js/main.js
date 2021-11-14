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

    toggleAboutBtn.addEventListener('click', toggleAbout);
    toggleReviewBtn.addEventListener('click', toggleReview);

    function toggleAbout() {
        aboutBlock.style.display = 'block';
        reviewBlock.style.display = 'none';
        toggleAboutBtn.style.color = '#000'
        toggleReviewBtn.style.color = '#00000066'
    }
    function toggleReview() {
        aboutBlock.style.display = 'none';
        reviewBlock.style.display = 'block';
        toggleAboutBtn.style.color = '#00000066'
        toggleReviewBtn.style.color = '#000'
    }




    const aboutSlidebackBtn = document.querySelector('.about-slider__btn-left');
    const aboutSlideNextBtn = document.querySelector('.about-slider__btn-right');

    const aboutSlides = document.querySelectorAll('.about__slider-img');

    aboutSlideNextBtn.addEventListener('click', aboutSlideNext);
    aboutSlidebackBtn.addEventListener('click', aboutSlideBack);

    let aboutSlideCounter = 0;
    let oneTwoThree;

    function aboutSlideNext() {
        oneTwoThree = 1;
        for (i = 0; i < 3; i++) {
            aboutSlides[i].src = './img/slides/head-slider-item-' + (aboutSlideCounter + oneTwoThree) + '.jpeg';
            oneTwoThree++;
        }
        aboutSlideCounter = aboutSlideCounter + 1;
        
    }

    function aboutSlideBack() {
        if (aboutSlideCounter > 0) {
            oneTwoThree = 1;
            for (i = 0; i < 3; i++) {
                aboutSlides[i].src = './img/slides/head-slider-item-' + (aboutSlideCounter - oneTwoThree) + '.jpeg';
                oneTwoThree--;
            }
            aboutSlideCounter = aboutSlideCounter - 1;
        }
        
    }


});


// const burgerBtn = document.querySelector('.header__top-burger');
// const burgerCloseBtn = document.querySelector('.burger-menu__close-btn');
// const burgerBlock = document.querySelector('.burger-menu');
// const header = document.querySelector('.header');
// var kva = 0;

// burgerBtn.addEventListener('click', burgerO);
// burgerCloseBtn.addEventListener('click', burgerC);

// function burgerO() {
//     burgerBlock.style.display = 'block';
//     header.style.borderBottomRightRadius = '0';
//     header.style.borderBottomLeftRadius = '0';
//     kva = 1;
//     console.log('kvaOpen' + kva);
// }
// function burgerC() {
//     burgerBlock.style.display = 'none';
//     header.style.borderBottomRightRadius = '10px';
//     header.style.borderBottomLeftRadius = '10px';
//     kva = 0;
//     console.log('kvaClose' + kva);
// }