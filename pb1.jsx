// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// let a = 5;
// let b = 10;

// [a,b] = [b,a];

// console.log(a,b);

// const swap = (a,b) => [b,a];
// let [a,b] = swap(5,10);

// console.log(a,b);


// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

// const isEven = (n) => n % 2 === 0;

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

// const largest = (a, b, c) => {
//     return Math.max(a, b, c);
// }

// console.log(largest(3, 7, 5));

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

// const toFahrenheit = (celsius) => (celsius * 9/5) + 32;
// console.log(toFahrenheit(0));

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.
const checkSign = (n) => {
  if (n > 0) return "positive";
  else if (n < 0) return "negative";
  else return "zero";
};