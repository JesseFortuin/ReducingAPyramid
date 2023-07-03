reducePyramid([1,2,3,4]);

function reducePyramid(base) {
    if(base.length === 1){
        return base;
    }
    const newBase = [];

    for (i = 0; i < base.length - 1; i++){
        let sum = base[i] + base[i+1];

        newBase[i] = sum;
    }
    return reducePyramid(newBase)
}