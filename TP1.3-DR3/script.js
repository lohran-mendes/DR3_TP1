// Criando objeto que possui método

// No arquivo script.js, siga as etapas abaixo:

// Utilizando o objeto “carro” do exercício anterior, faça com que ele tenha o método “acelerar”.
// Chame o método “acelerar” a partir de um objeto instanciado.
// Ao chamar o método “acelerar” será exibido um alerta com a mensagem: “Acelerando!”.
const carro = {
  ano: 1968,
  modelo: "Fusca",
};
carro.acelerar = function () {
  alert("Acelerando!");
};

console.log(carro);
carro.acelerar();
