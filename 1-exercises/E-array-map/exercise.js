// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//              1st solution

// var numbersTimedByHun = numbers.map(numbers => numbers * 100);
// console.log(numbersTimedByHun);

//              2nd solution

// var numbersTimedByHun = numbers.map(numbers => {
//     return numbers * 100;
// });

// console.log(numbersTimedByHun);

//              3rd solution

// var numbersTimedByHun = numbers.map(function timesHundred(number){
//    return number * 100;
// });
// console.log(numbersTimedByHun);

//              4th solution
var numbersTimedByHun = numbers.map(function (number) {
    return number * 100;
});
console.log(numbersTimedByHun);
