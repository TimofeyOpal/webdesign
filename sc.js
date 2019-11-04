
$(function() {
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.post .' + get_id);

        $('.posts').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.posts').show(500);
    });
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
            items:8,
            loop:true
        });
});
if ($(window).width() < 420){
    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true
    });
};

