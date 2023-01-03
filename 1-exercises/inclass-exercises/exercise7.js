/* Write a function which:
Takes the same array of arrays as input
Returns an array which contains the average price over the last 5 days for each stock. For example, the first element of the resulting array should contain Apple’s (AAPL) average stock price for the last 5 days.
The average value should be rounded to 2 decimal places, and should be a number (not a string)
Given our example values, the expected result should be [176.89, 335.66, 3405.66, 2929.22, 1041.93]
Hint: To calculate the average of a set of values, you can add them together and divide by the number of values. So the average of 5, 10 and 20 is (5 + 10 + 20) / 3 = 11.67
*/
const closingPricesLast5Days = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
]  

calculateChange(closingPricesLast5Days)

function calculateAverage(arr) {
    let sum = 0
    for (let price of arr) {
        sum += price
    }
    const average = sum / arr.length
    return average
}

function calculateAllAverages(myPortfolio) {
    const myArr = []
    for (let stock of myPortfolio) {
        const average = calculateAverage(stock)
        const formattedAverage = Number(average.toFixed(2))
        myArr.push(formattedAverage)
    }
    return myArr
}
const result = calculateAllAverages(closingPricesLast5Days)
console.log('🐙 ~ result', result)