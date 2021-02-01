// Agora, modifique o script acima para que ele informe se a pessoa, cujo IMC foi calculado, possui algum nível de obesidade. Considere a seguinte tabela para saber qual situação deve ser apresentada para cada resultado:
// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9    	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV

const readlineSync = require('readline-sync');


function calculateIMC() {
  const peso = readlineSync.questionFloat("Qual o seu peso?");
  const altura = readlineSync.questionFloat("Qual sua altura?");
  const IMC = (peso / (Math.pow(altura, 2)))
  console.log("Seu IMC é: %s", IMC.toFixed(2))
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

calculateIMC();
