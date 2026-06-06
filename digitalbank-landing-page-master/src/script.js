import renderAdvantages from "./renders/renderAdvantages.js";
import renderArticles from "./renders/renderArticles.js";

renderAdvantages();
renderArticles();

// Seleciona os elementos necessários
const btnMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".nav-menu");
const iconMenu = document.querySelector(".btn-menu i");

// Adiciona o evento de clique no botão do menu hambúrguer
btnMenu.addEventListener("click", () => {
  // Liga/Desliga a classe 'ativo' que mostra o menu no CSS
  navMenu.classList.toggle("ativo");

  // Troca o ícone de Hambúrguer (fa-bars) pelo 'X' (fa-xmark) ao abrir/fechar
  if (navMenu.classList.contains("ativo")) {
    iconMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    iconMenu.classList.replace("fa-xmark", "fa-bars");
  }
});

// [Opcional] Fecha o menu automaticamente se o usuário clicar em algum link interno
const menuLinks = document.querySelectorAll(".nav-menu .links-header");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
    iconMenu.classList.replace("fa-xmark", "fa-bars");
  });
});
