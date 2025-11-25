const palindromes = function (str) {
    const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    
    return cleanString === [...cleanString].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
