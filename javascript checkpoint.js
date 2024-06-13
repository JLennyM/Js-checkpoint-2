//checkpoint 
// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("John")); 


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("John"));


// 3. Capitalize Words
var sentence = "implement a function that capitalizes the first letter of each word";
var capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);


// Array Functions

// 1. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMax([1, 3, 5, 7, 9])); // Output: 9
console.log(findMin([1, 3, 5, 7, 9])); // Output: 1

// 2. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 3. Filter Array
function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}

console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]

// Mathematical Functions

// 1. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// 2. Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11)); // Output: true

// 3. Fibonacci Sequence
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
