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
