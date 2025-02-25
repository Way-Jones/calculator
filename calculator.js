
    
        const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Testing the functions
console.log(add(0, 0)); // 0
console.log(add(2, 2)); // 4
console.log(subtract(10, 4)); // 6
console.log(sum([])); // 0
console.log(sum([7, 11])); // 18
console.log(multiply([2, 4, 6, 8, 10, 12, 14])); // 645120
console.log(power(4, 3)); // 64
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
    
