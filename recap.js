function add(price1, price2) {
  let result = price1 + price2;
  return result;
}

const totalBill = add(10, 50);
//console.log(totalBill);

function add2(price1, price2) {
  return price1 + price2;
}
const totalPrice = add2(20, 100);
//console.log(totalPrice);

function doMath(num1, num2) {
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;

  return sub;
}
let value = doMath(10, 5);
console.log(value);
