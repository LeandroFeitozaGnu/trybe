/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.*/
let custo = 100;
let valor = 200;
let lucro ;

if(custo !== 0 && valor !== 0) {
    lucro = (valor - custo) * 0.8 *1000;
    console.log(lucro);
}else {
    console.log("Erro, valores não podem ser 0")
}
