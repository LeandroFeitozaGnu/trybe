let numbers = [2,6,8,10,12,18];
let numeroImpar = 0;
let arrayImpar = [];

for(index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0);
        numeroImpar = numbers[index];
        arrayImpar.push(numeroImpar);
}
if (arrayImpar.length == 0)
    console.log("Nenhum valor impar encontrado")