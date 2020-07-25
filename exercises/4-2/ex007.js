let array = [10,20,5,3,416546,45];
let menorNumero = array[0] ;

for (index = 0; index <= array.length -1; index += 1) {
    if(array[index] < menorNumero) {
        menorNumero = array[index]
    }
};
console.log(menorNumero);
