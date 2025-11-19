const removeFromArray = function(array, ...nums) {
    return array.filter(value => !nums.includes(value));
};




// Do not edit below this line
module.exports = removeFromArray;
