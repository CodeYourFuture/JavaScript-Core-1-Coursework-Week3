function generateFibonacciSequence(n) {
  let fibonacciNumArr = [0, 1];
  
  for (let i=2; i<n; i++) {
    fibonacciNumArr[i] = fibonacciNumArr[i-2] + fibonacciNumArr[i-1]
    
    
      
  }
  return fibonacciNumArr
}
console.log(generateFibonacciSequence(10))
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]