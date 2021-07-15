/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const newArr =[];
arr.forEach(number => {
    if ( number % 15 === 0){
    newArr.push("FizzBuzz");
  } else if ( number % 5 === 0){
    newArr.push("Buzz");
  }else if (number % 3 === 0){
    newArr.push("Fizz");
  }else {
    newArr.push(number);
  }

});

// const newArr = arr.map(number => {

//   if ( number % 15 === 0){
//     return "FizzBuzz";
//   } else if ( number % 5 === 0){
//     return "Buzz";
//   }else if (number % 3 === 0){
//     return "Fizz";
//   }else {
//     return number;
//   }
// });

console.log(newArr);
console.log(arr); //<---------- original array

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
