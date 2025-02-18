// Removendo uma propriedade de um objeto

// No arquivo script.js, siga as etapas abaixo:

// Remova a propriedade `ano de fundação`, do objeto “colegio" criado nos exercícios anteriores, através da remoção de propriedade.
// Não recrie o objeto sem a propriedade. O objeto inicialmente terá tudo o que foi feito nos exercícios anteriores. Remova através de codificação.
const colegio = {
  nome: "Teixeira Pombo",
  ano: 1980,
  nomeDiretor: "João Pedro Diretor",
  numeroAlunos: 300,
  telefone: "(12) 99123-4567",
  obterDiretor: function () {
    return this.nomeDiretor;
  },
};

delete colegio.ano;
console.log(colegio);
