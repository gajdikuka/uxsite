var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        799: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 3,
        },
    },
});