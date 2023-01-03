/* Earlier we defined an array of stocks:*/
const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];


/* Now, imagine we have an array of arrays which holds the closing price 
for the last 5 days for each of these stocks:
*/

const closingPricesLast5Days = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
]  

/* Write a function which:
Takes this array of arrays as input
Returns an array which contains the change in price from the first day to the last day for each stock.
The value should be rounded to 2 decimal places, and should be a number (not a string)
Given our example values, the expected result should be [-6.2, -13.4, 23.9, -82.43, -162.77]
Feel free to use any of the loops we learned today. */

function calculateChange(prices) {
    let myArr = []
    for (let price of prices) {
            let firstDay = price[0]
            let lastDay = price[price.length - 1]
            let difference = lastDay - firstDay
            myArr.push(Number(difference.toFixed(2)))
    }
    console.log(myArr);
}
calculateChange(closingPricesLast5Days)