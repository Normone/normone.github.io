document.addEventListener("DOMContentLoaded", function(){

    // $('.d-dlist').each(function (idx, el) {
    //     $(el).click( function (e) {

            

    //         function DropDown(el) {
    //             this.dd = el;
    //             this.initEvents();
    //         }

    //         DropDown.prototype = {
    //             initEvents : function() {
    //                 var obj = this;
        
    //                 obj.dd.on('click', function(event){
    //                     $(this).toggleClass('active');
    //                     event.stopPropagation();
    //                 });	
    //             }
    //         }

    //         var dd = new DropDown( $('.') );

    //         $(document).click(function() {
    //             // all dropdowns
    //             $('.d-d-list').removeClass('active');
    //         });

            

    //     });
    // });


    // 1
    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }

    // 2
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;
            let curr = this.dd.$(".current");
            let option = this.dd.$("li");

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                event.stopPropagation();
            });
            
            obj.dd.iption.on('click', function(event){
                $(this).toggleClass('hidden');
                event.stopPropagation();
            });
        }
    }

    // 3
    $(function() {

        var dd = new DropDown( $('.d-d-list') );

        $(document).click(function() {
            // all dropdowns
            $('.d-d-list').removeClass('active');
        });

    });













});