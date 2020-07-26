//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let number = 5;
let symbol = '*';
let line ='' ;

for (i = 1; i <= number; i += 1) {
    line += symbol
}
for (k = 1; k <= number; k +=1) {
    console.log(line)
}

