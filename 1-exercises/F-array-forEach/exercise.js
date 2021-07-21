/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//PSEUDO CODE
//*use forEach to go over array
//*print numbers that aren't part of the two conditionals

arr.forEach(num => {
  //due to control flow, this check has to be performed first to get value that meets both 
  if(num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
    //if num doesn't match multiple of 3 AND 5, we run this next part of the block (multiple of 3)
  } else if(num % 3 === 0) {
    console.log("Fizz");
    //multiple of 5
  } else if(num % 5 === 0) {
    console.log("Buzz");
    //no conditions met print num
  } else {
    console.log(num);
  }
})
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
