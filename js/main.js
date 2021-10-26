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