// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//PSEUDO CODE
//*map goes over every item in array
//*multiply each item by 100

//1: Function declared outside of the map method
function multiplyNumber(number) {
  return number * 100;
}

const multipliedNumbers = numbers.map(multiplyNumber);

//2: Function declared within map method
const multipliedNumbers = numbers.map(function multiplyNumber(number) {
  return number * 100;
});

//3: Anonymous function within map method
const multipliedNumbers = numbers.map(function (number) {
  return number * 100;
})

//4: Arrow function
const multipliedNumbers = numbers.map(number => {
  return number * 100;
})

//5: arrow function refactored syntax
const multipliedNumbers = numbers.map(number => number * 100);

console.log(multipliedNumbers);