// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
  



var numbersHundred_1 = numbers.map(function double(number) {
  return number * 100;
});

console.log(numbersHundred_1);


// Here we have removed both the function keyword and the function name
var numbersHundred_2 = numbers.map(number => {
  return number * 100
});

console.log(numbersHundred_2);


var numbersHundred_3 = numbers.map(number => number * 100);

console.log(numbersHundred_3);


