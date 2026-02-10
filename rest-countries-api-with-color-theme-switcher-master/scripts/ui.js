const createDetailLine = (label, value) => {
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = `${label}: `;
  
  p.appendChild(strong);
  p.append(document.createTextNode(value)); // append seguro para texto
  return p;
};


// ui.js

// Função auxiliar para encontrar o nome do país através da sigla (ex: "BRA" -> "Brazil")
const getCountryNameByCode = (code, allCountries) => {
  const country = allCountries.find(c => c.alpha3Code === code);
  return country ? country.name : code;
};

export const renderDetails = (container, country, allCountries, onBack) => {
  container.innerHTML = "";

  const section = document.createElement("div");
  section.className = "details-container";

  // Tratando dados que podem ser arrays ou objetos no JSON
  const currencies = country.currencies?.map(c => c.name).join(", ") || "N/A";
  const languages = country.languages?.map(l => l.name).join(", ") || "N/A";
  const nativeName = country.nativeName || country.name;

  section.innerHTML = `
    <button class="btn-back">
      <i class="fa-solid fa-arrow-left"></i> Back
    </button>

    <div class="details-content">
      <img src="${country.flags.svg || country.flags.png}" alt="Flag of ${country.name}">
      
      <div class="details-text">
        <h2>${country.name}</h2>
        
        <div class="details-columns">
          <div class="col">
            <p><strong>Native Name:</strong> ${nativeName}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Sub Region:</strong> ${country.subregion || 'N/A'}</p>
            <p><strong>Capital:</strong> ${country.capital || 'N/A'}</p>
          </div>
          <div class="col">
            <p><strong>Top Level Domain:</strong> ${country.topLevelDomain?.join(", ") || 'N/A'}</p>
            <p><strong>Currencies:</strong> ${currencies}</p>
            <p><strong>Languages:</strong> ${languages}</p>
          </div>
        </div>
        
        <div class="border-countries">
          <strong>Border Countries:</strong>
          <div class="border-list">
            ${country.borders ? 
              country.borders.map(code => `
                <span class="border-tag">${getCountryNameByCode(code, allCountries)}</span>
              `).join("") 
              : "<span>None</span>"
            }
          </div>
        </div>
      </div>
    </div>
  `;

  section.querySelector(".btn-back").addEventListener("click", onBack);
  container.appendChild(section);
};

/**
 * Cria o elemento do Card "sólido" (Node do DOM)
 */
export const createCountryCard = (country, onClick) => {
  const card = document.createElement("div");
  card.className = "card";

  // Aqui está o pulo do gato: o evento de clique já nasce com o elemento
  card.addEventListener("click", () => {
    onClick(country)
  });

  // Imagem da bandeira
  const img = document.createElement("img");
  img.src = country.flags.png;
  img.alt = `Flag of ${country.name}`;
  img.loading = "lazy";

  // Container de informações
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  const title = document.createElement("h4");
  title.className = "title";
  title.textContent = country.name;

  // Gerando as linhas de detalhes sem repetir código
  const population = createDetailLine("Population", country.population.toLocaleString("en-US"));
  const region = createDetailLine("Region", country.region);
  const capital = createDetailLine("Capital", country.capital || "N/A");

  // Montagem da estrutura
  cardInfo.append(title, population, region, capital);
  card.append(img, cardInfo);

  return card;
};


/**
 * Renderiza a lista completa de forma performática
 */
export const renderList = (container, countries, onClick) => {
  if (!container) return;

  // Limpa o container antes de renderizar
  container.innerHTML = "";

  // O Fragment serve como um "container invisível" na memória.
  // Evita que o navegador tenha que redesenhar a página a cada card adicionado.
  const fragment = document.createDocumentFragment();

  countries.forEach((country) => {
    const cardElement = createCountryCard(country, onClick);
    fragment.appendChild(cardElement);
  });

  // Adiciona todos os cards de uma vez só ao DOM real
  container.appendChild(fragment);
};