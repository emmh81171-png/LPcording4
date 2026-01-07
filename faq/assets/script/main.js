var hamburger = $('.hamburger-menu');

//open closeボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {

    hamburger.removeClass('hamburger-menu-active')
});


// アコーディオン機能
$('.faq__top').on('click', function () {

    var answer = $(this).next('.faq__answer');
    
    var icon = $(this).find('.faq__bi i');
    
    answer.slideToggle(300);
    
    if (icon.hasClass('bi-plus')) {
        icon.removeClass('bi-plus').addClass('bi-dash');
    } else {
        icon.removeClass('bi-dash').addClass('bi-plus');
    }
    
    $(this).toggleClass('active');
});
