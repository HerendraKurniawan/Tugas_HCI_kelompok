console.log("Connected.")
$(document).ready(function(){
    var curr = 0;
    var item = $('.obj-img');
    var len = item.length;

    function slideShow(){
        var items = item.eq(curr);
        item.hide();
        item.fadeIn();

    }

    var autoSlide = setInterval(function(){
        curr += 1;
        if (curr > len - 1){
            curr = 0;
        }
        slideShow();
    },3000);

    $('#prev-img').click(function(){
        curr -= 1;
        if (curr < 0){
            curr = len - 1;
        }
        slideShow();
    });
    $('#next-img').click(function(){
        curr += 1;
        if (curr > len - 1){
            curr = 0;
        }
        slideShow();
    });

});