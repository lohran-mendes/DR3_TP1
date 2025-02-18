// Grupo - Trocando estilos

// No arquivo script.js, siga as etapas abaixo:

// Ao clicar na "div" de classe “conteudo”.
// Modifique o atributo "style", fazendo as modificações:
// A `cor de fundo` para azul.
// A `letra` para branco.
// A `cor de borda` para laranja.
// Aumente sua `largura` e `altura` em 2px.
// Não faça as alterações `manualmente` no arquivo `index.html`.
// Somente pode-se adicionar uma função de click na div.
// Utilize o DOM para resolver o exercício.
// Assim que terminar, salve todos os links para os exercícios realizados em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR3_TP1.PDF” e poste como resposta a este TP.
const box = document.querySelector(".conteudo");
let adicionarTamanho = 2;

box.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  box.style.color = "white";
  box.style.border = "solid orange 4px";
  box.style.height = `${adicionarTamanho}px`;
  box.style.width = `${adicionarTamanho}px`;
  adicionarTamanho += 2;
});
