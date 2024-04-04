var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1163: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
});


let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const itens = document.querySelectorAll(".navUlDestk a");

menuToggle.addEventListener("click", () =>{
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

itens.forEach(item => {
  item.addEventListener("click", () => {
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
    show = true;
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll(".lazyload");

  // Função para carregar imagens quando estão visíveis no viewport
  function lazyload() {
      lazyloadImages.forEach(function(img) {
          if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
              img.src = img.dataset.src;
              img.classList.remove('lazyload');
          }
      });
  }

  // Carregar imagens quando a página é carregada ou rolada
  lazyload();
  window.addEventListener("scroll", lazyload);
});