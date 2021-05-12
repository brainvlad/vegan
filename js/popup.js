$(document).ready(function($) {
    $('.popup-open').click(function() {
        $('.main').css('filter', 'blur(8px)')
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $('.main').css('filter', 'blur(0px)')
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('.main').css('filter', 'blur(0px)')
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $('.main').css('filter', 'blur(0px)')
            $(this).fadeOut();
        }
    });

});
