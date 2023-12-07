const swiper = new Swiper(".swiperCarousell", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    775: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
