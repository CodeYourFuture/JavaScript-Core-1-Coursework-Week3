// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersByHundred = numbers.map((number) => number * 100);
console.log(numbersByHundred);

let numbersByHundred2 = numbers.map((number) => {
  return number * 100;
});
console.log(numbersByHundred2);

let numbersByHundred3 = numbers.map(function (number) {
  return number * 100;
});
console.log(numbersByHundred3);

var numbersByHundred4 = numbers.map(function double(number) {
  return number * 100;
});
console.log(numbersByHundred4);
