/*
    Sometimes when using loops, we'll want to execute the body of the loop 
    at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of 
          the loop will never execute
        - But in a do-while loop, because the condition is checked after
          the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the 
    first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
  // TODO

  //1.own solution: initialize first even number is 0, sum is 0, counter from 0;
  // let currEvenNumber = 0;
  // let sum = 0;
  // let i = 0;
  // do {
  // //sum of first n even number(0):
  //   sum += currEvenNumber;
  // //next even number:
  //   currEvenNumber += 2;
  // //next counter:
  //   i++;
  // } while (i < n);    //condition
  // return sum;         //return final output when condition is false.

//2.solution from google classroom  review:
   let sum = 0;
   let i=0;    
   do {
    sum += (i * 2);
    i++;
   }while(i < n);
   return sum;

}
//   for loop:  solution 
//      let currEvenNumber = 0,
//        sum = 0;
//      // sum of first n even numbers
//      for (let i = 0; i < n; i++) {
//        sum += currEvenNumber;
//        // next even number
//        currEvenNumber += 2;
//      }
//      // required sum
//      return sum;
//    }
    
console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); //should output 90
