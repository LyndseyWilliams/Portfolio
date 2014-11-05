
$(document).ready(function() {
    $('.lyndsey_info_text').hide();
    $('.lyndsey').animate({
        opacity:1
    });

    $('.lyndsey').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.lyndsey_info_text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.lyndsey_info_text').fadeOut();

    });
});

