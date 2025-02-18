// Adicionando método em objeto

// No arquivo script.js, continuando o que foi feito no exercício anterior, siga as etapas abaixo:

// Adicione um método chamado “obterDiretor” que, ao ser chamado, mostra o nome do `diretor` do colégio.
// Chame o método “obterDiretor” a partir do objeto.
const colegio = {
  nome: "Teixeira Pombo",
  ano: 1980,
  nomeDiretor: 'João Pedro Diretor',
  numeroAlunos: 300,
  telefone: '(12) 99123-4567'
};

colegio.obterDiretor = function() {
    return this.nomeDiretor
}

console.log(colegio.obterDiretor())