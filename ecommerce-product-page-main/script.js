const txtDiscountedPrice = document.querySelector(".price"); 
const txtTitle = document.querySelector("h1");
const txtQuantity = document.querySelector("#txt-quantity");

const btnRemoveItem = document.querySelector("#btn-remove-item");
const btnAddItem = document.querySelector("#btn-add-item");
const btnAddToCart = document.querySelector("#btn-add-to-cart");
const cartContent = document.querySelector(".cart-content");

let quantity = 0;

// Lógica de quantidade
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

// Lógica de adicionar ao carrinho
btnAddToCart.addEventListener("click", () => {
    // A lógica de regex continua a mesma, apenas ajustada para a variável correta
    const priceRaw = txtDiscountedPrice.textContent.replace(/[^0-9.]/g, '');
    const price = Number(priceRaw);
    const qty = Number(txtQuantity.textContent);
    
    if (qty > 0) {
        const result = CalculatePrice(price, qty);
        CartItemComponent(result);
    }
});

function CalculatePrice(price, quantity) {
  return price * quantity;
}

function CartItemComponent(result = 0) {
  // 1. Criar o container principal
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  // 2. Criar a div da imagem
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = "images/image-product-1-thumbnail.jpg";
  img.alt = "Product thumbnail";
  imgContainer.appendChild(img);

  // 3. Criar a div de texto
  const textContainer = document.createElement("div");
  const title = document.createElement("p");
  title.textContent = txtTitle.textContent;

  const price = document.createElement("p");
  // Ajuste nos textos para manter a clareza
  price.textContent = `${txtDiscountedPrice.textContent} x ${txtQuantity.textContent} `;

  const strong = document.createElement("strong");
  strong.textContent = `$${result.toFixed(2)}`;
  price.appendChild(strong);

  textContainer.appendChild(title);
  textContainer.appendChild(price);

  // 4. Criar a div do botão
  const btnContainer = document.createElement("div");
  const btnDelete = document.createElement("button");
  btnDelete.id = "btn-delete";

  const iconDelete = document.createElement("img");
  iconDelete.src = "images/icon-delete.svg";
  iconDelete.alt = "Delete item";

  btnDelete.appendChild(iconDelete);
  btnContainer.appendChild(btnDelete);

  // 5. Montar tudo no elemento pai
  cartContent.innerHTML = "";
  cartContent.appendChild(cartItem);
  cartItem.appendChild(imgContainer);
  cartItem.appendChild(textContainer);
  cartItem.appendChild(btnContainer);
}