// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const array1 = [1, 4, 9, 16];

function multipliedByHundred(number) {
    return number * 100;
  }
  
const multipliedNumbers = numbers.map(multipliedByHundred);
  
console.log(multipliedNumbers);
  

const case_1 = numbers.map(function multiply(number) {
  return number * 100;
});
  
const case_2 = numbers.map(function (number) {
   return number * 100;
});
  
const case_3 = numbers.map((number) => {
  return number * 100;
});

const case_4 = numbers.map((number) => number * 100);