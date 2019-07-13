$(document).ready(function(e){
    $('.hamburger-menu').on('click', function(e){
        if($(this).attr('data-clicked') == 0){
            $('.mobile-menu').css('display', 'block');
            $('.hamburger-menu__bars').eq(1).css('opacity', '0');
            $('.hamburger-menu__bars').eq(0).css({'transform': 'rotate(45deg) translate(3px, 10px)','width': '27px'});
            $('.hamburger-menu__bars').eq(2).css({'transform': 'rotate(-45deg) translate(2px, -10px)'});
            $('.mobile-menu').animate({opacity: 1}, {queue: false, duration:300});
            $(this).attr('data-clicked' , 1);
        }
        else{
            $(this).attr('data-clicked' , 0);
            $('.hamburger-menu__bars').eq(1).css('opacity', '1');
            $('.hamburger-menu__bars').eq(0).css({'transform': 'rotate(0) translate(0, 0)', 'width' : '21px'});
            $('.hamburger-menu__bars').eq(2).css({'transform': 'rotate(0) translate(0, 0 )'});
            $('.mobile-menu').animate({opacity: 0}, {queue: false, duration:300, complete: function(){
                    $('.mobile-menu').css('display', 'none');
                }});

        }

    });
});