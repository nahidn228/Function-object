//string params

// function evenSizedString(str) {
//   let size = str.length;
//   console.log(str, size);
// }
// evenSizedString("NAHID");
// evenSizedString("NIMU");

function evenSizedString(str) {
  let size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("Even Size");
    return true;
  } else {
    console.log("Odd Size");
    return false;
  }
}
//evenSizedString("NAHID");
//evenSizedString("NIMU");

//Boolean params
function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
//console.log(doubleOrTriple(10, false));

//array params
function numberOfElements(numbers) {
  let length = numbers.length;
  //return numbers;
  return length;
}
//console.log(numberOfElements([10, 12, 20, 30, 40, 50, 60, 80]));

//object params
function getAge(person) {
  const age = person.age;
  return age;
}

