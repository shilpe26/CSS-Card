$(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});
