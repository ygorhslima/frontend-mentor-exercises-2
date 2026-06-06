import itemArticles from '../arrays/itemArticles.js';

export default function renderArticles() {
  const list = document.querySelector(".latest_articles_list");
  if (!list) return;

  const content = itemArticles.map((item) => /*html*/ `
        <div class="la-item">
            <div class="la-image">
                <img src="${item.img}" alt="${item.alt}">
            </div>
            <div class="la-content">
                <span>${item.author}</span>
                <h4>${item.title}</h4>
                <p>
                    ${item.paragraph}
                </p>
            </div>
        </div>
    `).join("");

    list.innerHTML = content;
}
