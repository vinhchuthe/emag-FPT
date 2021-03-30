$.noConflict();
jQuery(document).ready(function ($) {
    // Code that uses jQuery's $ can follow here.

    const tilt = $('.block').tilt({
        perspective: 3000,
        maxTilt: 10,
        speed: 200,
    });

    $(".block--object").click(function () {
        var index = $(this).data('id');
        console.log(index);
    });

});

var baiviet = [
    {
        index: 1,
        content: {
            
        }
    }
]