// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedByHundred(number) {
  return number * 100;
}

const multipliedNumbers = numbers.map(multipliedByHundred);

console.log(multipliedNumbers);

//---------------------------------------------------------
const solutionOne = numbers.map(function multiply(number) {
  return number * 100;
});

//---------------------------------------------------------
const solutionTwo = numbers.map(function (number) {
  return number * 100;
});

//---------------------------------------------------------
const solutionThree = numbers.map((number) => {
  return number * 100;
});

//---------------------------------------------------------
const solutionFour = numbers.map((number) => number * 100);
