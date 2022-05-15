var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        999: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});