// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplier(number) {
  return number * 100;
}

const numbersMultiplierOne = numbers.map(multiplier);

console.log(numbersMultiplierOne);

const numbersMultiplierTwo = numbers.map(function multiplierTwo(number) {
  return number * 100;
});
console.log(numbersMultiplierTwo);

const numbersMultiplierThree = numbers.map(function (number) {
  return number * 100;
});
console.log(numbersMultiplierThree);

const numbersMultiplierFour = numbers.map((number) => {
  return number * 100;
});
console.log(numbersMultiplierFour);

const numbersMultiplierFive = numbers.map((number) => number * 100);

console.log(numbersMultiplierFive);
