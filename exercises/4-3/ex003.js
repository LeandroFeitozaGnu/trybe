//3- Agora inverta o lado do triângulo
let number = 10;
let lineIndex;
let columnIndex;
let symbol = '*';
let line = '';
let inputPosition = number;

for(lineIndex = 0; lineIndex < number; lineIndex ++) {
    for(columnIndex = 0; columnIndex <= number; columnIndex ++) {
        if(columnIndex < inputPosition) {
            line = line + ' ';
        } else {
            line = line + symbol;
        }
    }
    console.log(line);
    line = '';
    inputPosition --;
};


