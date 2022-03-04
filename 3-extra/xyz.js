function getAveragePricesForOneStock(prices) {
  let sum = 0;
  for (let price of prices) {
    sum = sum + price;
  }
  let averageSum = sum / prices.length;
  return roundTo2Decimals(averageSum);
}
function roundTo2Decimals(num) {
  // returns the number rounded to 2 decimals
  return Number(num.toFixed(2));
}
const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];
function getAveragePrices(closingPricesForAllStocks) {
   return closingPricesForAllStocks.map((x) => getAveragePricesForOneStock(x));
  // loop through array
  // call the getAveragePricesForOneStock function
  // put these averages into a new array
  // return it
}
console.log(getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS));