function generateFibonacciSequence(n) {
  // TODO
  let fib = [0, 1];
  var sum = 0;
  for (var i = 1; i < n; i++) {
    sum = fib[i - 1] + fib[i];
    fib.push(sum);
  }
  return fib;
}

console.log(generateFibonacciSequence(10));
