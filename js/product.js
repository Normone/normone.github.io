document.addEventListener("DOMContentLoaded", function(){


    $('.add-in-cart-btn').each(function (idx, el) {
        $(el).click( function (e) {
            
            let qtyBlock = $(this).children('.product-qty');
            let text = $(this).children('p');

            $(this).addClass("active");
            text.css('display', 'none')
            qtyBlock.css('display', 'flex');
            

        });
    });

    $('.add-in-cart-btn-desk').each(function (idx, el) {
        $(el).click( function (e) {
            
            let qtyBlock = $(this).children('.product-qty');
            let text = $(this).children('p');

            $(this).addClass("active");
            text.css('display', 'none')
            qtyBlock.css('display', 'flex');
            

        });
    });


});