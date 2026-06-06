import renderAdvantages from "./renders/renderAdvantages.js";
import renderArticles from "./renders/renderArticles.js";

renderAdvantages();
renderArticles();
const btn_menu = document.querySelector(".btn-menu");
btn_menu.addEventListener("click",(evt)=>{
    let div_links_menu = document.querySelector(".div-links-menu");
    div_links_menu.classList.toggle("ativo");
})