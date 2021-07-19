// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// With separate function
function multiplyBy100(number) {
  return number * 100;
}

// As a callback

const multiply100 = numbers.map(function multiply(number) {
  return number * 100;
});

const multiplyNumber = numbers.map(multiplyBy100);

// With arrow function
const multiplyArray = numbers.map((number) => {
  return number * 100;
});

// With arrow function, no curly braces, and no return statement.
const numbersBy100 = numbers.map((number) => number * 100);
// var numbersDoubled = numbers.map(number => number * 2);

console.log(multiplyNumber);
console.log(multiply100);
console.log(multiplyArray);
console.log(numbersBy100);

//test passed
