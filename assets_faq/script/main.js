var hamburger = $('.hamburger-menu');

//open closeボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {

    hamburger.removeClass('hamburger-menu-active')
});