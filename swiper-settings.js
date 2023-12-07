const swiper = new Swiper(".swiperCarousell", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // 768: {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    // },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
