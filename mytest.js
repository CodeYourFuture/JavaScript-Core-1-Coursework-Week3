function factorial(input) {
    let numReducedByOneArr = []
    while (input !== 1) {
        let newNum = input
        numReducedByOneArr.push(newNum)
        input--
    }
    const multipleOfAll = numReducedByOneArr.reduce((prev, curr) => {return prev * curr })
    return multipleOfAll
}

console.log(factorial(5))