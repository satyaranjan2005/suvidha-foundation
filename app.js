let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0: {
          slidesPerView: 1,
          spaceBetween: 100,
      },
      1450: {
          slidesPerView: 2,
      },
      2000: {
        slidesPerView: 3,
      }
  },
  });


