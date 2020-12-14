/*
function fator() {
    let number = 5;
    let result = 1
    for(i = 1; i <= number; i ++) {
        result *= i;
    }
    return  result
}
*/
//console.log(fator())



let fatoracao = number => {
    let result = 1
    for(let i = 1; i <= number; i += 1) {
        result *= i;
    }
    return result
} 

console.log(fatoracao(6))