import { dataPaises } from "./data.js";
import { renderList, renderDetails } from "./ui.js";
import { initTheme } from "./theme.js";

const inputSearchCountry = document.querySelector(".input-search-country");
const listaContainer = document.getElementById('lista-paises');
const selectFiltrarRegiao = document.getElementById("filter-region");
const homeView = document.getElementById("home-view");
const detailsView = document.getElementById("details-view");

/**
 * Orquestra a troca de telas e renderiza os detalhes
 */
const showDetails = (country) => {
  homeView.classList.add("hidden");
  detailsView.classList.remove("hidden");

  // Adicionamos dataPaises como 3º argumento para traduzir as borders
  renderDetails(detailsView, country, dataPaises, () => {
    detailsView.classList.add("hidden");
    homeView.classList.remove("hidden");
    // Opcional: limpa o campo de busca ao voltar
    if(inputSearchCountry) inputSearchCountry.value = "";
  });
};

const filtrarPaises = (termo) => {
  const termoFormatado = termo.toLowerCase().trim();
  const resultados = dataPaises.filter((pais) => {
    const nomeOriginal = pais.name.toLowerCase();
    const nomePt = (pais.translations?.pt || "").toLowerCase();
    return nomeOriginal.includes(termoFormatado) || nomePt.includes(termoFormatado);
  });

  // Passamos showDetails (sem parênteses!)
  renderList(listaContainer, resultados, showDetails);
};

// Event Listeners
if(inputSearchCountry){
    inputSearchCountry.addEventListener("input", (evt) => {
        filtrarPaises(evt.target.value);
    });
}

if(selectFiltrarRegiao){
  selectFiltrarRegiao.addEventListener("change", (e) => {
    const regioesFiltrados = dataPaises.filter((p) => p.region.includes(e.target.value));
    renderList(listaContainer, regioesFiltrados, showDetails);
  });
}

// Inicialização
initTheme();
// CORREÇÃO: Passamos showDetails apenas como referência
renderList(listaContainer, dataPaises, showDetails);