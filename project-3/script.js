$(document).ready(function () {   
    $('.coolflower').click(function () {
       $('p').toggle();
    });
     $('#planty').click(function () {
//       $('.planty').toggle(2000);     
        $(this).toggleClass("smaller");
    });
    
    $(function () {
        $(".coolflower").draggable();
    });   

});


