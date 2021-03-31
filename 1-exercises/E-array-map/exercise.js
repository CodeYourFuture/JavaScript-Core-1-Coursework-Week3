// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//solution1

const result= numbers.map(number => number *100);
console.log(result);

//solution 2
/*
function multiple(number){
    return number * 100;
}
const result=numbers.map(multiple);
console.log(result);
*/
//solution 3
/*
const result=numbers.map(function(number){
    return number * 100;
});
console.log(result);
*/
//solution 4
/*
const result=numbers.map(function multiple(number){
    return number * 100;
});
console.log(result);
*/