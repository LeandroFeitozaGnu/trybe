//calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for(indice = 0; indice < numbers.length; indice += 1) {
    soma += numbers[indice];
}
console.log(media=soma/numbers.length);
