// Por último, modifique o script do exercício anteriror para que ele utilize o pacote inquirer para solicitar as informações ao usuário no terminal. Para entender como utilizar o inquirer , consulte a documentação no site do npm . Além disso, você pode precisar relembrar o que já aprendemos sobre Promises em outra aula
// Observação : Utilize a propriedade validate das perguntas do inquirer para verificar se os valores digitados são números válidos.

// const readlineSync = require('readline-sync');
const inquirer = require('inquirer');
const { calculateIMC } = require('./calculateIMC');

const questions = [
  {
    type: 'input',
    name: 'peso',
    message: 'Por favor, informe seu peso',
    validate: function (value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Por gentileza, informe um número válido';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'altura',
    message: 'E qual sua altura?',
    validate: function (value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Por gentileza, informe um número válido';
    },
    filter: Number,
  },
]

inquirer.prompt(questions).then((answers) => {
  const IMC = calculateIMC(answers.peso, answers.altura)
  console.log(`Seu IMC é %s`, IMC.toFixed(2))
})

// function calculateIMC() {
//   const peso = readlineSync.questionFloat("Qual o seu peso?");
//   const altura = readlineSync.questionFloat("Qual sua altura?");

//   const IMC = (peso / (Math.pow(altura, 2)))
//   console.log("Seu IMC é: %s", IMC.toFixed(2))
//   if (IMC < 18.5 ){
//     console.log("Abaixo do peso (magreza)")
//     return;
//   }
//   if (IMC >= 18.50 && IMC <= 24.99) {
//     console.log("Peso Normal")
//     return;
//   }
//   if (IMC >= 25.0 && IMC <= 29.9) {
//     console.log("Acima do peso (sobrepeso)")
//     return;
//   }
//   if (IMC >= 30.0 && IMC <= 34.9) {
//     console.log("Obesidade grau I")
//     return;
//   }
//   if (IMC >= 35.0 && IMC <= 39.9) {
//     console.log("Obesidade grau II")
//     return;
//   }
//   if (IMC > 40) {
//     console.log("Obesidade graus III e IV")
//     return;
//   }
// }

// calculateIMC();
