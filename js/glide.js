var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        899: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 3,
        },
    },
});