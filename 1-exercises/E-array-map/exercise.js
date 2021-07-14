// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)



function multiply(number) {
  return number * 100;
}

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultiplied = numbers.map(multiply);

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultiplied = numbers.map(function multiply(number) {
  return number * 100;
});

//we don't need the function name because not going to reuse the function anywhere 
let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultiplied = numbers.map(function (number) {
  return number * 100;
});

//arrow functions
let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultiplied = numbers.map((number) => {
  return number * 100;
});

//code even shorter by removing {} and 'return'
let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultiplied = numbers.map((number) => number * 100);

//console.log(numbersMultiplied);