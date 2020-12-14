//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(str) {
    let inverseStr = '';
    for(i = str.length - 1; i >= 0; i --) {
        inverseStr += str[i];
    }
    if (str === inverseStr) {
        return true
    } else {
        return false
    };

};

