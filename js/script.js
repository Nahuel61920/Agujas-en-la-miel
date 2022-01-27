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

var swiper = new Swiper(".mySwiper", {
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
