import Swiper from "swiper/js/swiper.min";

export default function() {
  // Swiper cards
  // var quotes = new Swiper(".quotes__slider", {
  //   loop: true,
  //   noSwiping: true,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: "auto",
  //       spaceBetween: 30,
  //       noSwiping: false,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 80,
  //       noSwiping: false,
  //     },
  //     992: {
  //       slidesPerView: 5,
  //       spaceBetween: 80,
  //     },
  //   },
  // });

  var intro = new Swiper(".main-slider .swiper-container", {
    slidesPerView: 1,
    effect: "fade",
    parallax: false,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".main-slider .slider-dots",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".main-slider .swiper-next",
      prevEl: ".main-slider .swiper-prev",
    },
  });
}
