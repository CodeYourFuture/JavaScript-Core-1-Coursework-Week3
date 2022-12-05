

function sum(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

let result = sum(6);
console.log(result);

