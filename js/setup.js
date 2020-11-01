function loadImg(qtd) {
  let elementHtml = `<div class="owl-carousel owl-theme">`;
  var i = 1;
  while (i < qtd) {
    elementHtml += `
  <div class="item">
    <a href="#">
      <img class="box-movie" src="img/mini${i}.jpg" alt="" />
    </a>
  </div>`;
    i++;
  }
  return elementHtml + `</div>`;
}

$(".carousel-movie").html(loadImg(10));
// console.log(upImg());

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
