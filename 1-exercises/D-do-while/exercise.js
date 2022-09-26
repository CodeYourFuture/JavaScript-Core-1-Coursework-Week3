/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. 
    We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, 
          we know that it will always execute at least once
    
    1 Using a do-while loop, 
    2 write a function which returns 
      *the sum of 
      *the first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
    // TODO
   
    let sum = 0;
     let arr = [];
    for (let i = 0; i < n; i++){
        if (i >0 && i % 2 === 0) {
            arr.push(i);
        };
         for (let j = 0; j < arr; j++) {
          console.log(arr[j]);
         }
    //  console.log(sum)
    } 
    // return sum;
}
evenNumbersSum(10);

/*
  if (n[i] % 2 === 0) {
            let arr = [];
            arr.push(n[i]);
        }
*/
//evenNumbersSum(10);
// console.log(n)
/* 
console.log(evenNumbersSum(3));  should output 6
console.log(evenNumbersSum(0));  should output 0
 console.log(evenNumbersSum(10)); should output 90
*/
