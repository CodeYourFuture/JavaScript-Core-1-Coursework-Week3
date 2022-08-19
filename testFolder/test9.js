function factorial(input) {
    let sum =1;
    for (let i = 1;  i <= input; i++) {
        sum = i * sum;

    }
    return sum;
}

console.log(factorial(10));