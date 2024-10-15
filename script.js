// Botão para ocultar o sidebar 
const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

function showContent(item) {
  // Ocultar todos os conteúdos
  const items = document.querySelectorAll('.content-item');
  items.forEach(content => {
      content.style.display = 'none'; // Oculta todos os elementos
  });

  // Mostrar o conteudo de cada item
  const selectedItem = document.getElementById(item);
  if (selectedItem) {
      selectedItem.style.display = 'block'; // Exibe o conteúdo correspondente
  }
};
