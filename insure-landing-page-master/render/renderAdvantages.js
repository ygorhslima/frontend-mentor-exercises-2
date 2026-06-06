import itemAdvantages from "../data/itemAdvantages.js";

export default function renderAdvantages() {
  const list = document.querySelector(".advantages");

  const content = itemAdvantages.map(
    (item) => /*html*/ `
        <div class="advantages_item">
        <img src="${item.img}" alt="${item.alt}">
        <h3>${item.text}</h3>
        <p>${item.paragraphy}</p>
        </div>
    `,
  );

  list.innerHTML = content;
}