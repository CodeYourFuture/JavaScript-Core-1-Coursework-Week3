/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
    let currentNum = 0;
    let evenNumArr = [];
    
    do {
        if (currentNum%2 === 0 ) {
            evenNumArr.push(currentNum)
            
        } 
        currentNum += 1;
        
    } while (evenNumArr.length < n)
    return evenNumArr.reduce((prevNum, num) => {return prevNum+num})
}

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); // should output 90