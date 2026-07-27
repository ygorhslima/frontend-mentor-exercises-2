/**
 * @param {number} currentQty - A quantidade atual.
 * @param {HTMLElement} displayElement - O elemento HTML que exibe o texto.
 * @returns {number} A nova quantidade atualizada.
 */
export function removeQuantityItem(currentQty, displayElement) {
  if (currentQty > 0) {
    currentQty--;
    displayElement.textContent = String(currentQty);
  }
  console.log(currentQty);
  return currentQty;
}

/**
 * Adiciona uma unidade e atualiza o texto do elemento.
 * @param {number} currentQty - A quantidade atual.
 * @param {HTMLElement} displayElement - O elemento HTML que exibe o texto.
 * @returns {number} A nova quantidade atualizada.
 */
export function addQuantityItem(currentQty, displayElement) {
  currentQty++;
  displayElement.textContent = String(currentQty);
  console.log(currentQty)
  return currentQty; // Retorna o novo valor
}
