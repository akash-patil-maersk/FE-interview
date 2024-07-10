/**
 * Doubles each number in the given array, filters for values greater than 3, and returns the sum of those numbers.
 *
 * @param {number[]} numbers - The array of numbers to be processed.
 * @returns {number} - The sum of the numbers greater than 3.
 */
export function generateSum(numbers) {
  // code...
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = generateSum(numbers);
console.log(doubledNumbers);


// code should execute the promises in series
export const asyncSeriesExecuter = async function(promises) {
}

// Should return a promise which is resolved(`Completing ${i}`) after i amount of time is passed
export const asyncTask = function(i) {
}
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
]


// Explain event-loop in JS
// Implement Higer order function exercise
