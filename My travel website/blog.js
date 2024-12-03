const swiper = new Swiper('.swiper',{
  spaceBetween: 30,
    effect: "fade",
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteration: false,
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

//function to initialize swiper based on screen size
function initializeSwiper() {
  if (window.matchMedia ("(min-width: 300px) and (max-width:800px)").matches) {
    var swiper = new
    swiper(".swiper-container", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagnation: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });
  }
}