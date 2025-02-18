// Grupo - Objetos aninhados

// No arquivo script.js, siga as etapas abaixo:

// Crie um objeto “cidade”. Este objeto vai conter:
// Uma propriedade para “nome”.
// Uma propriedade para “ano de fundação”.
// Uma propriedade que será um objeto “prefeito”.
// O objeto “prefeito” que está dentro do objeto “cidade” possui:
// Uma propriedade para o “nome”.
// Uma propriedade para a “idade”.
const cidade = {
    nome: 'Taubaté',
    anoDeFundacao: '1800',
    prefeito: {
        nome: "Angel Romero",
        idade: 33
    },
}

console.log(cidade)