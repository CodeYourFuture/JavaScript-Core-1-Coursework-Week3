// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedArray(number) {
  return number * 100;
}

const numbersMultiplied = numbers.map(multipliedArray);

//declaring  the callback function inside of the method call

//var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const numbersMultiplied1 = numbers.map(function multipliedArray(number) {
  return number * 100;
});
//using map()without function name
//var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const numbersMultiplied2 = numbers.map(function (number) {
  return number * 100;
});
// using arrow function
//var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const numbersMultiplied3 = numbers.map((number) => number * 100);
console.log(numbersMultiplied);
console.log(numbersMultiplied1);
console.log(numbersMultiplied2);
console.log(numbersMultiplied3);
