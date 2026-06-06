import renderAdvantages from "./render/renderAdvantages.js";
import renderFooter from "./render/renderFooter.js";

renderAdvantages();
renderFooter();

const btn_menu = document.querySelector(".btn_menu");
btn_menu.addEventListener("click",(evt)=>{
    let menu = document.getElementById("menu")
    menu.classList.toggle("ativo")
})
