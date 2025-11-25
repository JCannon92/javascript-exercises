const fibonacci = function(num) {
    //add special cases
    num = Number(num);
    if (num === 0 ) return 0;
    if (num < 0) return 'OOPS';

    const arr = [1, 1];
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
