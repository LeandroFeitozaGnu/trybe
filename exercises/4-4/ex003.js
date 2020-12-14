function smallerIndex(array) {
let smaller = array[0];

for(i = 1; i <= array.length -1; i ++) {
    if ( array[i] < smaller) {
        smaller = i;
    }
}
return smaller
};