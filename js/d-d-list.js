document.addEventListener("DOMContentLoaded", function(){

    $('.d-d-list').each(function (idx, el) {
        $(el).click( function (e) {
            debugger
            
            const current = $(this).find('p');

            $(this).toggleClass('active');

            $(this).find('li').click(function(e) {

                console.log(this.innerText) // Выводит нужный текст. Текст из <li></li>

                console.log(current.innerText) // Пишет, что undefine
                
                current.innerText = this.innerText; // Естественно, не работает
            });

            // function DropDown(el) {
            //     this.dd = el;
            //     this.initEvents();
            // }

            // DropDown.prototype = {
            //     initEvents : function() {
            //         var obj = this;
        
            //         obj.dd.on('click', function(event){
            //             $(this).toggleClass('active');
            //             event.stopPropagation();
            //         });	
            //     }
            // }

            // var dd = new DropDown( $('.') );

            // $(document).click(function() {
            //     // all dropdowns
            //     $('.d-d-list').removeClass('active');
            // });

            

        });
    });


    // Хрень ниже работает, но только на первый элемент, а потому и нужен этот цирк с конями
    
    // 1
    // function DropDown(el) {
    //     this.dd = el;
    //     this.initEvents();
    // }

    // // 2
    // DropDown.prototype = {
    //     initEvents : function() {
    //         var obj = this;
    //         let curr = this.dd.$(".current");
    //         let option = this.dd.$("li");

    //         obj.dd.on('click', function(event){
    //             $(this).toggleClass('active');
    //             event.stopPropagation();
    //         });

    //         obj.dd.iption.on('click', function(event){
    //             $(this).toggleClass('hidden');
    //             event.stopPropagation();
    //         });
    //     }
    // }

    // // 3
    
    // $(function() {

    //     var dd = new DropDown( $('.d-d-list') );

    //     $(document).click(function() {
    //         // all dropdowns
    //         $('.d-d-list').removeClass('active');
    //     });

    // });













});