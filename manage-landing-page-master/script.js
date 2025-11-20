const btn_menu = document.querySelector(".btn-menu");
const div_links_menu = document.querySelector(".div-links-menu");
btn_menu.addEventListener("click",()=>{
    div_links_menu.classList.toggle("ativo");
})
