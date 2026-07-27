import { productImages } from "./listImagesShoes.js";
import { addQuantityItem, removeQuantityItem } from "./utils.js";

// Seleção de elementos
const txtDiscountedPrice = document.querySelector(".price");
const txtTitle = document.querySelector("h1");
const txtQuantity = document.querySelector("#txt-quantity");

const btnRemoveItem = document.querySelector("#btn-remove-item");
const btnAddItem = document.querySelector("#btn-add-item");
const btnAddToCart = document.querySelector("#btn-add-to-cart");
const cartContent = document.querySelector(".cart-content");

const cartModal = document.querySelector(".cart-modal");
const btnCart = document.querySelector(".btn-cart");

// seleção dos elementos no DOM das imagens dinâmicas
const mainImage = document.querySelector(".main-image img");
const thumbnailButtons = document.querySelectorAll(".thumbnail-list button");

let quantity = 0;

btnRemoveItem.addEventListener("click", () => {
  quantity = removeQuantityItem(quantity, txtQuantity);
});

btnAddItem.addEventListener("click", () => {
  quantity = addQuantityItem(quantity, txtQuantity);
});

// --- Lógica do Carrinho ---
btnAddToCart.addEventListener("click", () => {
  const priceRaw = txtDiscountedPrice.textContent.replace(/[^0-9.]/g, "");
  const price = Number(priceRaw);
  const qty = Number(txtQuantity.textContent);

  if (qty > 0) {
    const total = price * qty;
    renderCartItem(total);
  }
});

function renderCartItem(total) {
  cartContent.innerHTML = `
    <div class="cart-item">
      <img src="images/image-product-1-thumbnail.jpg" alt="Product thumbnail">
      <div class="cart-info">
        <p>${txtTitle.textContent}</p>
        <p>
          ${txtDiscountedPrice.textContent} x ${quantity} 
          <strong>$${total.toFixed(2)}</strong>
        </p>
      </div>
      <button id="btn-delete" aria-label="Delete item">
        <img src="images/icon-delete.svg" alt="Delete icon">
      </button>
    </div>
  `;
}

// --- Delegação de Eventos ---
// Como o botão de deletar é criado dinamicamente, escutamos no elemento pai (cartContent)
cartContent.addEventListener("click", (event) => {
  if (event.target.closest("#btn-delete")) {
    cartContent.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
  }
});

btnCart.addEventListener("click", (evt) => {
  cartModal.classList.toggle("active");
  const isHidden = cartModal.getAttribute("aria-hidden") == "true";
  cartModal.setAttribute("aria-hidden", !isHidden);
});


thumbnailButtons.forEach((button, index)=>{
  button.addEventListener("click",(e)=>{
    const clickedId = Number(e.currentTarget.dataset.id);
    console.log(clickedId)
    const selectedProduct = productImages.find(item => item.id == clickedId);
    if(selectedProduct){
      mainImage.src = selectedProduct.main;
      mainImage.alt = selectedProduct.alt;
    }
  })
});