// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function x_100(num) {
  return num * 100;
}

let numbers_x_100_method_1 = numbers.map(x_100);

let numbers_x_100_method_2 = numbers.map(function x_100(num) {
  return num * 100;
});

let numbers_x_100_method_3 = numbers.map(function (num) {
  return num * 100;
});

let numbers_x_100_method_4 = numbers.map((num) => {
  return num * 100;
});

let numbers_x_100_method_5 = numbers.map((num) => num * 100);

console.log(`The first method result is ${numbers_x_100_method_1}`);
console.log(`The second method result is ${numbers_x_100_method_2}`);
console.log(`The third method result is ${numbers_x_100_method_3}`);
console.log(`The forth method result is ${numbers_x_100_method_4}`);
console.log(`The fifith method result is ${numbers_x_100_method_5}`);
