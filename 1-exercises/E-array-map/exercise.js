// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// multiply numbers in numbers array by 100, with shortest syntax: arrow function syntax
const multipliedByHundred = numbers.map(num => num * 100);

console.log(multipliedByHundred, `<--------- with arrow function syntax`);


// multiply numbers in numbers array by 100, with anonymous function declaration inside map method
const multipliedByHundred2 = numbers.map(function (num) {
    return num * 100;
})

console.log(multipliedByHundred2, `<------ with anonymous function declaration inside map method`);


// multiply numbers in numbers array by 100, with callback function declared outside map method
const multiplyHundred = function(num) {
    return num * 100;
}

const multipliedByHundred3 = numbers.map(multiplyHundred);

console.log(multipliedByHundred3, `<-------- with callback function declared outside map method`)


console.log(numbers, `<------- original array, checked if it has been mutated`);
