function loadImg(qtd, local) {
  let elementHtml = `<div class="owl-carousel owl-theme">`;
  var i = 1;
  while (i <= qtd) {
    elementHtml += `
  <div class="item zoom">
    <a href="#">
      <img class="box-movie" src="img/${local}/mini${i}.jpg" alt="" />
    </a>
  </div>`;
    i++;
  }
  return elementHtml + `</div>`;
}

$("#list1").html(loadImg(8, "acao"));
$("#list2").html(loadImg(8, "aventura"));
$("#list3").html(loadImg(8, "comedia"));
$("#list4").html(loadImg(8, "documentarios"));

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
