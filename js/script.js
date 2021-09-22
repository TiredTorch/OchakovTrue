$(document).ready(function(){

    $('.rooms').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinte: true,
    });

    $('.gallery__wrapper').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
        infinte: true,
        slidesToShow: 3,
        dots: true,
    })

});