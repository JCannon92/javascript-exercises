const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, num) => mult * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let sum = 1;
  for (num; num > 0; num --) {
    sum = sum * num;
  }	
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
