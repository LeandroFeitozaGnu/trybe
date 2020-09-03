const myFizzBuzz = require('../ex001/fizzBuzz')

describe('Testa a implantação da função FizzBuzz', () => {
    it('Testa um numero divisivel por 3 e 5, se retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });

    it('Testa um numero divisivel por 3 se retorno é o esperado', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    });

    it('Testa um numero divisivel por 5 se retorno é o esperado', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    });

    it('Testa um numero NÃO divisivel por 3 e 5 se retorno é o esperado', () => {
        const num = 7;
        myFizzBuzz(num);
        expect(myFizzBuzz(num)).toBe(num)
    });

    it('Testa se não for passado um número, se retorno é o esperado', () => {
        const num = '5';
        myFizzBuzz(num);
        expect(myFizzBuzz(num)).toBe(false)
    });
})