/**aqui vai ser o arquivo javascript responsável por mudança de temas a partir do clique do radio button*/

const NAME_GROUP_RADIO = "theme-choice";

const main = document.querySelector(".conteudo-principal");
// pegar todo o container dos radios
const themeSwitcherContainer = document.querySelector('.theme-switcher');
themeSwitcherContainer.addEventListener("click",(event)=>{
    if(event.target.name === NAME_GROUP_RADIO){
        const valorTema = event.target.value;
        aplicarTema(valorTema)
    }
})


function aplicarTema(valorTema){
    // obter o body
    const body = document.body
    // removendo os três temas se tiver
    body.classList.remove("theme-1","theme-2","theme-3");
    // obter o valor do tema que o usuário clicou
    body.classList.add(`theme-${valorTema}`);
}

// 4. Aplicar o tema inicial (ao carregar a página)
const radioInicial = document.querySelector(`input[name="${NAME_GROUP_RADIO}"]:checked`);
if(radioInicial){
    aplicarTema(radioInicial.value);
}