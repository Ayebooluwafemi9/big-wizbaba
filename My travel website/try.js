const swiper = new swiper(".swiper-container", {
  // optiomal parameters
  loop: true,                            //loop
  // through slides,          
  autoplay: {
    delay: 3000,
    disableOnInteration: false,
  },               
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect:{
    crossFade: true,
  },

  speed: 600,
});