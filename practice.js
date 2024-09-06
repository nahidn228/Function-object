/* Task-1
Take four parameters. Multiply the four numbers and then return the result

Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/

/* Task-1
Take four parameters. Multiply the four numbers and then return the result

*/

function multiplyNumbers(a, b, c, d) {
  let result = a * b * c * d;
  return result;
}
//console.log(multiplyNumbers(2, 4, 5, 8));

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. 
*/

function numbers(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return num * 2;
  }
}
//console.log(numbers(6));

/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

let sum = 0;
let avg = 0;
function make_avg(arrayNumbers) {
  //console.log('the array is = ', arrayNumber);
  for (number of arrayNumbers) {
    sum = sum + number;
    avg = sum / arrayNumbers.length;
  }

  return avg;
}
let arrayNum = make_avg([2, 6, 12, 20]);
//console.log(arrayNum);

/*
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
let count = 0;
function count_zero(binaryString) {
  for (string of binaryString) {
    if (string == "0") {
      count++;
    }
  }
  return count;
}
stringValue = count_zero("1001010");
//console.log(stringValue);

/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/

function odd_even(number) {
  if (number % 2 === 0) {
    return "the number is even";
  } else {
    return "the number is odd";
  }
}
console.log(odd_even(205));
