export const createCountryCard = (p) => `
    <div class="card">
      <img src="${p.flags.png}" alt="Flag of ${p.name}" loading="lazy"/>
      <div class="card-info">
        <h4 class="title">${p.name}</h4>
        <p><strong>Population</strong>: ${p.population.toLocaleString('en-US')}</p>
        <p><strong>Region</strong>: ${p.region}</p>
        <p><strong>Capital</strong>: ${p.capital || 'N/A'}</p>
      </div>
    </div>
`;

export const renderList = (container, paises) => {
  if (!container) return;

  const html = paises.map(createCountryCard).join("");
  container.innerHTML = html;
};