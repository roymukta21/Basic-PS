// Day 10 — Algorithms & Problem Solving II

// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

// function wordCount(sentence) {
//   let words = sentence.split(" ");

//   let count = {};
//   for (let word of words) {
//     if (count[word]) {
//       count[word]++;
//     } else {
//       count[word] = 1;
//     }
//   }

//   return count;
// }

// console.log(wordCount("the cat sat on the mat"));

// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.


function longestWord(sentence){
    return sentence.split(" ").reduce((longest, word) => {
        return word.length > longest.length ? word : longest;
    }, "") ;
}
console.log(longestWord("The quick brown fox"))


// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

function rotateArray(arr, k) {
    // k = k % arr.length; 
let lastOfPart = arr.slice(-k);
let firstOfPart = arr.slice(0, -k);
return lastOfPart.concat(firstOfPart);
}
console.log(rotateArray([1,2,3,4,5], 2))

// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.






// Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row.


function pascalRow(n) {
  let row = [1];

  for (let i = 0; i < n; i++) {
    let newRow = [1];

    for (let j = 0; j < row.length - 1; j++) {
      newRow.push(row[j] + row[j + 1]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}

console.log(pascalRow(0)); 
console.log(pascalRow(3)); 