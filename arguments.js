function doubleIt(number) {
  const doubled = number * 2;
  console.log("The double number is ", number);
  console.log("The doubled value is = ", doubled);
}
doubleIt(5);
// The double number is  5
// The doubled value is =  10

// amra chayle kono variable o call korte pari

let number = 100;
doubleIt(number);
// The double number is  100
// The doubled value is =  200

function difference(num1, num2) {
  let diff = num1 - num2;
  console.log(
    "number 1 = ",
    num1,
    "number 2 = ",
    num2,
    " the difference is = ",
    diff
  );
}
difference(45, 20);

let fatherAge = 40;
let myAge = 20;
difference(fatherAge, myAge);
