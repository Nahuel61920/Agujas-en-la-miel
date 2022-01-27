document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    const scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

var swiper = new Swiper(".pc-swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      shadowOffset: 20,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  var swiper = new Swiper(".mobil-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
      slidesPerView: 1,
      },
      768: {
      slidesPerView: 2,
      },
      1024: {
      slidesPerView: 3,
      },
  },
  });
