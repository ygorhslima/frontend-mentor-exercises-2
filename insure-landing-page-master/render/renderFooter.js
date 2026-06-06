import footerLinks from "../data/itemFooter";

export default function renderFooter() {
  // 1. Selecionamos o container principal do footer
  const footerContainer = document.querySelector(".content-footer");

  if (!footerContainer) return;
  
  const content = footerLinks.map((item) => {
    const linksHTML = item.links.map((link) => `
      <a href="${link.url}">${link.text}</a>
    `).join("");

    return /*html*/ `
      <div class="links-footer">
        <h4>${item.category}</h4>
        ${linksHTML}
      </div>
    `;
  }).join("");
  footerContainer.innerHTML = content;
}