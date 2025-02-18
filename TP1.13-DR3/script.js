// Grupo - Objeto com método usando “this”

// No arquivo script.js, siga as etapas abaixo:

// Peça ao usuário para informar o raio de um círculo.
// Crie um objeto “circulo” que tenha:
// Uma propriedade de `raio` com o valor informado pelo usuário.
// E dois métodos, um para calcular a `circunferência` e outro para calcular a `área`.
// Exiba a circunferência através da chamada do método respectivo do objeto “circulo”.
// Exiba a área através da chamada do método respectivo do objeto “circulo”.
// DICA: talvez seja necessário usar a constante `Math.PI` para este exercício:
// Considere para a área:
// Área = Math.PI * raio * raio
// Considere para a circunferência:
// Circunferência = Math.PI * raio * 2
const raio = Number(prompt("Infome o raio de um círculo"));
let objeto;
if (raio && raio > 0) {
  objeto = {
    raio: raio,
    circunferencia: function () {
      return Math.PI * this.raio * 2;
    },
    area: function () {
      return Math.PI * Math.pow(this.raio, 2);
    },
  };
  console.log("objeto " + objeto);
  console.log("raio do objeto " + objeto.raio);
  console.log("circunferência do objeto " + objeto.circunferencia());
  console.log("area do objeto " + objeto.area());
} else alert("O valor inserido não é válido para um raio");
