const readlineSync = require('readline-sync');

function calculateIMC(peso, altura) {
  // const peso = readlineSync.questionFloat("Qual o seu peso?");
  // const altura = readlineSync.questionFloat("Qual sua altura?");

  const IMC = (peso / (Math.pow(altura, 2)))

    if (IMC < 18.5 ){
      console.log("Abaixo do peso (magreza)")
      return;
    }
    if (IMC >= 18.50 && IMC <= 24.99) {
      console.log("Peso Normal")
      return;
    }
    if (IMC >= 25.0 && IMC <= 29.9) {
      console.log("Acima do peso (sobrepeso)")
      return;
    }
    if (IMC >= 30.0 && IMC <= 34.9) {
      console.log("Obesidade grau I")
      return;
    }
    if (IMC >= 35.0 && IMC <= 39.9) {
      console.log("Obesidade grau II")
      return;
    }
    if (IMC > 40) {
      console.log("Obesidade graus III e IV")
      return;
    }
}

module.exports = {
  calculateIMC
}; 
