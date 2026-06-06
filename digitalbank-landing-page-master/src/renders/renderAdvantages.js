import itemAdvantages from '../arrays/itemAdvantages.js';

export default function renderAdvantages() {
  const list = document.querySelector(".advantages-list");
  if (!list) return;

  const content = itemAdvantages
    .map(
      (item) => /*html*/ `
        <div class="item-advantages">
            <img src="${item.img}" alt="${item.alt}">
            <h4 class="title">${item.text}</h4>
            <p class="paragraphy">${item.paragraphy}</p>
        </div>
    `,
    )
    .join("");

  list.innerHTML = content;
}