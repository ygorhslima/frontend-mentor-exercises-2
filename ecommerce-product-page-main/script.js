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

let quantity = 0;

// --- Lógica de Quantidade ---
btnRemoveItem.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    txtQuantity.textContent = quantity;
  }
});

btnAddItem.addEventListener("click", () => {
  quantity++;
  txtQuantity.textContent = quantity;
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
