let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0: {
          slidesPerView: 1,
      },
      960: {
          slidesPerView: 2,
      },
      1410: {
        slidesPerView: 3,
      }
  },
  });


