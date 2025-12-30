var hamburger = $('.hamburger-menu');

//open closeボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {

    hamburger.removeClass('hamburger-menu-active')
});

// アコーディオンのタイトルがクリックされたら
$('.question__acordion').on('click', function (e) {
    // .accordion-contentを選択
    var content = $(this).next();

    // .accordion-contentを表示・非表示
    content.slideToggle();
});


$('.question__acordion').on('click', function () {
    $(this).toggleClass('active');
});
