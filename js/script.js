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
    dotsClass: "my-dots",
    nextArrow: ".my-nextArrow",
    prevArrow: ".my-prevArrow",

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