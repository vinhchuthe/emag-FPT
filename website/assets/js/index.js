window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$.noConflict();
jQuery(document).ready(function ($) {
    // Code that uses jQuery's $ can follow here.

    // nicescroll
    $("#main-container").niceScroll({
        scrollspeed: 100,
        mousescrollstep: 25,
    });
    $("#popup-detail").niceScroll();

    // AOS lib
    AOS.init();

    // tilt js
    const tilt = $('.block').tilt({
        perspective: 2000,
        maxTilt: 20,
        speed: 500,
    });

    // popup

    // ---- popup-open -------
    $(".block--object").click(function () {
        $("#main-container").getNiceScroll().remove();
        var index = $(this).data('id');
        popupOpen(index);
    });

    popupOpen = (index) => {
        $(".adm_emag").addClass('popup-open');
        $(".adm--popup").addClass('popup-wrapper-active');
        $("#" + index).addClass('popup-active');
    }

    $('.popup-nav').click(function () {
        var id = $(this).data('nav');
        $("#popup-detail").animate({
            scrollTop: 0
        }, 1000);

        setTimeout(function () {
            $(".adm-popup--block").removeClass('popup-active');
            $("#" + id).addClass('popup-active');
            var change = new TimelineMax();
        }, 1000);
    });


    //  ------ popup-close -------
    $("#ss-btn-back").click(function () {
        $(".adm_emag").removeClass('popup-open');
        $(".adm--popup").removeClass('popup-wrapper-active');
        $(".adm-popup--block").removeClass('popup-active');
        $("#main-container").niceScroll();
    });
});