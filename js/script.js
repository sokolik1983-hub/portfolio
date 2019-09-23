// Появление стрелки через 6 секунд
$(document).ready(function() {
    setTimeout(function(){
        $('.arrow').show();
    }, 6000);
});
// Слайдер
$('.sl').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    dotsClass: "sl__my-dots",
    nextArrow: ".sl__my-nextArrow",
    prevArrow: ".sl__my-prevArrow",

    responsive: [
        {breakpoint: 1024,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {breakpoint: 768,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
// slider from section--about

$('.about__sl').slick({
    autoplay: true,
    vertical: true,
    arrows: false,
    asNavFor: ".sl-mini",
});
// slider from section--about
$('.sl-mini').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: ".about__sl",
    focusOnSelect: true,
    slidesToScroll: 4,
    infinite: false
});

// lazyLoad
$('.portfolio__link--open').on('click', function() {
    $('.portfolio__wrap--hidden').css('display', 'flex');
    $(".portfolio__link--open").css('display', 'none');
    $(".portfolio__link--close").css('display', 'block');
});

$('.portfolio__link--close').on('click', function() {
    $('.portfolio__wrap--hidden').css('display', 'none');
    $(".portfolio__link--open").css('display', 'block');
    $(".portfolio__link--close").css('display', 'none');
});