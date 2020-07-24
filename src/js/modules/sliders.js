import Swiper from "swiper/js/swiper.min";

export default function() {
  // Swiper cards
  var designCardSlider = new Swiper(".design-cards__slider .swiper-container", {
    loop: false,
    freeMode: true,
    noSwiping: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    noSwiping: false,
  });

  let introPaginationMobile = {
    el: ".main-slider .slider-dots",
    clickable: true,
    dynamicBullets: true,
  };
  let introPaginationDesktop = {
    el: ".slider-counter p",
    type: "fraction",
  };

  var introSlider = new Swiper(".main-slider .swiper-container", {
    slidesPerView: 1,
    //effect: "fade",
    parallax: true,
    spaceBetween: 0,
    loop: true,
    preloadImages: false,
    lazy: true,
    pagination:
      window.innerWidth >= 768 ? introPaginationDesktop : introPaginationMobile,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".main-slider .swiper-next",
      prevEl: ".main-slider .swiper-prev",
    },
  });

  var packageProjectsSlider = new Swiper(
    ".package__gallery .swiper-container",
    {
      spaceBetween: 20,
      loop: false,
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 15,
          noSwiping: false,
          freeMode: true,
          noSwiping: false,
        },
        768: {
          slidesPerView: 3,
          freeMode: false,
          noSwiping: true,
        },
      },
    }
  );

  var projectsSlider = new Swiper(".projects-slider .swiper-container", {
    slidesPerView: 1,
    parallax: true,
    spaceBetween: 20,
    loop: false,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".projects-slider .swiper-next",
      prevEl: ".projects-slider .swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
        noSwiping: false,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
}
