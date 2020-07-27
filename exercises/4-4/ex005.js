function moreRepeats(array) {
let countRepetition = 0;
let numberOfReptition = 0;
let moreRepete = 0;
for(i = 0; i <= array.length - 1; i ++) {
    for(k = 1; k <= array.length -1; k ++) {
        if (array[i] === array[k]) {
            countRepetition ++;
        }
         numberOfReptition = countRepetition;
         if (numberOfReptition > moreRepete) {
            moreRepete = array[i]
        };    
    }
    countRepetition = 0;
};
    return moreRepete;
};