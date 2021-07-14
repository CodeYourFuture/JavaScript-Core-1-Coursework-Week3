/** @format */

// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiples(number) {
	return number * 100;
}

let numberMultiples = numbers.map(multiples);

//different syntax shown below
numberMultiples = numbers.map(function double(number) {
	return number * 100;
});

numberMultiples = numbers.map(function (number) {
	return number * 100;
});

numberMultiples = numbers.map((number) => {
	return number * 100;
});

numberMultiples = numbers.map((number) => number * 100);

console.log(numberMultiples);
