function biggerIndex(array) {
    let bigger = 0;
    for(i = 0; i <= array.length - 1; i ++) {
        if (array[i] > bigger) {
            bigger = i;
        }
    }
    return bigger
};


