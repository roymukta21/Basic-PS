// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// let a = 5;
// let b = 10;

// [a,b] = [b,a];

// console.log(a,b);

const swap = (a,b) => [b,a];
let [a,b] = swap(5,10);

console.log(a,b);