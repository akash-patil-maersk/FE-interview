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


export const asyncSeriesExecuter = async function(promises) {
  for (let promise of promises) {
    try{
      const result = await promise;
      console.log(result);
    }catch(e){
      console.log(e);
} }
}

const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
}); }
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
]

