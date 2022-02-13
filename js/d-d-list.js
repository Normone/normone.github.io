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


    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }

    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                event.stopPropagation();
            });	
        }
    }

    $(function() {

        var dd = new DropDown( $('.d-d-list') );

        $(document).click(function() {
            // all dropdowns
            $('.d-d-list').removeClass('active');
        });

    });













});