// Task 1
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;
// }

// function findPrimeNumbers(arr) {
//     let primes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             primes.push(arr[i]);
//         }
//     }
//     return primes;
// }

// // Test case
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(findPrimeNumbers(array));

// Task 2

// function fizzBuzz(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(i);
//         }
//     }
//     return result;
// }

// // Test case
// console.log(fizzBuzz(15)); 

// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]