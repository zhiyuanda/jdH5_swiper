window.addEventListener('load',function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    var app = document.querySelector('.app');
    var close = document.querySelector('.close');
    close.addEventListener('click',function() {
        app.style.display = 'none';
    })
})