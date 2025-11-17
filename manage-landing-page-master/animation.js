
document.addEventListener("DOMContentLoaded", (event) => {
    const list = document.querySelector(".testimonials-list");
    if (!list) return;

    const items = gsap.utils.toArray(".testimonials-list .avatar-container");
  
    // O tamanho total é o tamanho de TODOS os itens (originais + duplicados)
    let totalWidth = 0;
    items.forEach(item => {
        // Calcula a largura de cada item (offsetWidth inclui padding e border)
        totalWidth += item.offsetWidth; 
    }); 

    // A animação move o contêiner pela metade do total da largura (ou seja, 
    // pelo tamanho do conjunto original de itens). Quando o conjunto 1 sair da tela,
    // o conjunto 2 estará exatamente no lugar do conjunto 1, e o loop reinicia.
    const distanceToMove = totalWidth / 2;
    
    // Duração ideal: Ajuste este valor para controlar a velocidade da rolagem.
    const durationTime = 30; 

    gsap.to(list, {
        // Move o contêiner para a esquerda pela largura do conjunto original (distanceToMove).
        x: `-${distanceToMove}px`, 
        
        duration: durationTime, 
        ease: "none", 
        repeat: -1, // Loop infinito
        
        // Yoyo deve ser false para que ele sempre role na mesma direção.
        yoyo: false, 
    });
});