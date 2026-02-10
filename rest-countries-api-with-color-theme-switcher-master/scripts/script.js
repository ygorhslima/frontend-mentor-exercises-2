import { dataPaises } from "./data.js";
import { renderList } from "./ui.js";
import { initTheme } from "./theme.js";

const inputSearchCountry = document.querySelector(".input-search-country");

const listaContainer = document.getElementById('lista-paises');

const selectFiltrarRegiao = document.getElementById("filter-region");


const filtrarPaises = (termo) => {
  const termoFormatado = termo.toLowerCase().trim();
  
  const resultados = dataPaises.filter((pais) => {
    const nomeOriginal = pais.name.toLowerCase();
    const nomePt = (pais.translations?.pt || "").toLowerCase();
    // 2. Removido o ponto e vírgula interno
    return nomeOriginal.includes(termoFormatado) || nomePt.includes(termoFormatado);
  });

  // 3. Passando o container e os resultados
  renderList(listaContainer, resultados);
};
if(inputSearchCountry){
    inputSearchCountry.addEventListener("input",(evt)=>{
        filtrarPaises(evt.target.value);
    });
}

selectFiltrarRegiao.addEventListener("change",(e)=>{
  const regioesFiltrados = dataPaises.filter((p)=> p.region.includes(e.target.value));
  renderList(listaContainer, regioesFiltrados);
})

initTheme();
renderList(listaContainer, dataPaises)