function biggestName(names){
let compareName = names[0];
for(i = 0; i <= names.length -1; i ++) {
    if (names[i].length > compareName.length) {
        compareName = names[i];
    }
}
    return compareName;
};