const sumAll = function(a, b) {
 
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } 
    let small = a <= b ? a : b;
    let big = a > b ? a : b;
    let arr = [];

    for (small; small <= big; small++) {
        arr.push(small);
    }

    return arr.reduce((total, current) => total + current);   
};

// Do not edit below this line
module.exports = sumAll;
