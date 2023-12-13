window.addEventListener('load', function(){
  let elem = document.querySelector(".mvSlide");
  if (elem !== null) { //.mvSlideがあれば…
    let mySwiper = new Swiper(".mvSlide", {
      loop: true, //ループさせる
      effect: "fade", //フェードのエフェクト
      centeredSlides: true,
      autoplay: {
        delay: 2000, //2秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
      },
      speed: 5000, //5秒かけながら次の画像へ移動
      allowTouchMove: false, //マウスでのスワイプを禁止

    });
  }
});


window.addEventListener('load', function(){
  let elem2 = document.querySelector(".jobSlide");
  if (elem2 !== null) { //.saleSlideがあれば…
    let saleSlide = new Swiper(".jobSlide", {
      loop: true, //ループさせる
      spaceBetween: 20,
      initialSlide: 0,
      freeModeSticky: true,
      slidesPerView: 'auto',
      pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // プログレスバー
      // clickable: true, 無効化
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        769: {
          spaceBetween: 40,
        }
      }
    });
  }
});
