

// инициировать wow
var wow = new WOW();
wow.init();



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
//hamburger
$(function() {
    $('.hamburger__icon').on('click', function(){

        $(this).closest('.hamburger').toggleClass('menu-open');
    });
});
$(function() {
    $( '.hamburger__menu-item' ).on("click", function(){
        $('.hamburger').removeClass('menu-open');
    });
});

//плавный скролл
$(function(){
    $('.arrow__link',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.navbar__link--about',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.hamburger__menu-item--about',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.navbar__link--portfolio',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.hamburger__menu-item--portfolio',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.navbar__link--footer',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.hamburger__menu-item--footer',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.hamburger__menu-item--top',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.portfolio__link--open',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#portfolio-hidden').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.portfolio__link--close',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.about__btn--secondary',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.nav-arrow__link--top',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.nav-arrow__link--portfolio',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.nav-arrow__link--about',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.nav-arrow__link--footer',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
        e.preventDefault();
    });
});
$(function(){
    $('.nav-arrow__link--footer',).on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
        e.preventDefault();
    });
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});


