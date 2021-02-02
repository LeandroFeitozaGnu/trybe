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

inquirer.prompt(questions)
.then((answers) => {
  const IMC = calculateIMC(answers.peso, answers.altura)
});
