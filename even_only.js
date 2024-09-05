/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
      if (number % 2 === 0) {
          console.log(number);
          evens.push(number);
      }
  }
  return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens)


function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
      sum = sum + number;
      //console.log("Even numbers = ", number);
    }
  }
  return sum;
}
let sum = sumOfEvenNumbers([10, 15, 24, 23, 26, 54, 123]);

console.log("sum of all even numbers = ", sum);
