// Capturando todos os links da navbar que começam com # [href^="#"]
const itensMenu = document.querySelectorAll("nav a[href^='#']");

// Para cada item adiciona um evento
itensMenu.forEach((item) => {
  item.addEventListener("click", scrollToID);
});

function scrollToID(event) {
  //Tirar o comportamento padrão, ele ficaria alterando a url
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 110; //diminuindo o tamanho da navbar
  ScrollToPosition(to);
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop; //offset pega a posição do elemento na tela
}

function ScrollToPosition(to) {
  //  navegando para o elemento usando o comportado suave do proprio navegador
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
