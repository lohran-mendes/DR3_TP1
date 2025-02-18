// Grupo - Trocando a imagem

// No arquivo script.js, siga as etapas abaixo:

// Após clicar na tag <img>.
// Troque o conteúdo do seu atributo `src`.
// Faça aparecer a imagem chamada “cafe.jpg”.
// Não faça as alterações `manualmente` no arquivo `index.html`.
// Somente pode-se adicionar uma função de click na img
// Utilize o DOM para resolver o exercício.
const img = document.querySelector("img");
img.addEventListener("click", () => {
  img.src = "./assets/graos-cafe.jpeg";
  img.alt = "uma xícara de café";
});
