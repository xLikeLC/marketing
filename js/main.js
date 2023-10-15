$(function () {
  $(".menu a, .go-top, .header__icon").on("click", function (e) {
    //Anulăm prelucrarea standardă a clicului pe link.
    e.preventDefault();

    //Extragem identificatorul blocului din atributul href.
    var id = $(this).attr("href"),
      //Aflăm înălțimea de la începutul paginii până la blocul la care face referire ancor.
      top = $(id).offset().top;

    //"Animăm trecerea la o distanță - sus în 1500 ms."
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".slider-blog__inner").slick({
    // dots: true - Activează afișarea punctelor de navigare pentru diapozitive.
    dots: true,
    //prevArrow și nextArrow definesc codul HTML pentru butoanele "diapozitiv anterior" și "diapozitiv următor" cu imagini corespunzătoare.
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    // În secțiunea "responsive" sunt stabilite setările pentru o lățime a ecranului de până la 768 de pixeli, iar în acestea se stabilește arrows: false pentru a ascunde săgețile de navigare pe ecrane mai înguste.
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  // Apoi, codul adaugă un gestionar de eveniment de clic pentru elementele cu clasele "menu__btn" și "menu a". Atunci când are loc un clic pe aceste elemente, se adaugă sau se elimină clasa "header__top-inner--active" de la elementul cu clasa "header__top-inner". Acest lucru este probabil utilizat pentru animarea afișării și ascunderii meniului.
  $(".menu__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });
  // În cele din urmă, codul inițializează pluginul MixItUp pentru elementul cu clasa "portfolio__content". MixItUp este o bibliotecă pentru filtrarea și sortarea elementelor pe un site w
  var mixer = mixitup(".portfolio__content");
});
