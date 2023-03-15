// SOLUTIONS -> https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week3-Solution/blob/main/2-mandatory/3-stocks.js

/*
    THESE EXERCISES ARE QUITE HARD. JUST DO YOUR BEST, AND COME WITH QUESTIONS IF YOU GET STUCK :)

    Imagine we a working for a finance company. Below we have:
        - an array of stock tickers
        - an array of arrays containing the closing price for each stock in each of the last 5 days.
            For example, CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[2] contains the prices for the last 5 days for STOCKS[2] (which is amzn)
*/

/* ======= Stock data - DO NOT MODIFY ===== */
const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL -- Average for apl
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT -- Average for Microsoft
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN --Average for Amazon
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];

/*
    We want to understand what the ---->  average price over the last 5 days for each stock is. <-----
    Implement the below function, which
        - Takes this CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
        - Returns an array containing the average price over the last 5 days for each stock.
            For example, the first element of the resulting array should contain Apple’s (aapl) average stock price for the last 5 days.
            The second element should be Microsoft's (msft) average price, and so on.
    The average value should be rounded to 2 decimal places, and should be a number (not a string)

    Hint 1: To calculate the average of a set of values, you can add them together and divide by the number of values.
        So the average of 5, 10 and 20 is (5 + 10 + 20) / 3 = 11.67
    Hint 2: If the problem seems complex, try breaking it down into smaller problems.
        Solve the smaller problems, and then build those solutions back up to solve the larger problem.
        Functions can help with this!
*/

// as an array of arrays we need nested for loops (one for the outer array and one for the inner arrays)

function getAveragePrices(closingPricesForAllStocks) {
  let averageStockFor5CompaniesArray = [];
  for (let i = 0; i < closingPricesForAllStocks.length; i++) {
    let sum = 0;
    for (let j = 0; j < closingPricesForAllStocks[i].length; j++) {
      // to find average of each inner array
      sum = sum + closingPricesForAllStocks[i][j]; // using both index for the outer and inner arrays (think matrices, matrix, in maths using coordinates to get to the value)
    }
    average = sum / closingPricesForAllStocks[i].length;
    averageStockFor5CompaniesArray.push(Number(average.toFixed(2))); // converting string to number and 2 decimal places then pushing to new array of averages
  }
  return averageStockFor5CompaniesArray;
}

// TODO - write a separate function called getAverage and then call the function from getAveragePrices

/*
    We also want to see what the change in price is from the first day to the last day for each stock.
    Implement the below function, which
        - Takes this CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
        - Returns an array containing the price change over the last 5 days for each stock.
            For example, the first element of the resulting array should contain Apple’s (aapl) price change for the last 5 days.
            In this example it would be:
                (Apple's price on the 5th day) - (Apple's price on the 1st day) = 172.99 - 179.19 = -6.2
    The price change value should be rounded to 2 decimal places, and should be a number (not a string)
*/

////////////////////// HELP! Getting inverted values (-ve are +ve and +ve are -ve) ///////////////////////
function getPriceChanges(closingPricesForAllStocks) {
  let priceChangesFor5CompaniesArray = [];
  for (let i = 0; i < closingPricesForAllStocks.length; i++) {
    let difference;
    for (let j = 0; j < closingPricesForAllStocks[i].length; j++) {
      difference =
        closingPricesForAllStocks[i][0] - closingPricesForAllStocks[i][4]; // upon inverting values it works. WHY?
    }
    priceChangesFor5CompaniesArray.push(Number(difference.toFixed(2)));
  }
  return priceChangesFor5CompaniesArray;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// REVIEW -> teachers' solution ///////////////
// created a function to calculate change in price for single array first, then passed the value through another function as a parameter

// function getPriceChanges(closingPricesForAllStocks) {
//   let changes = [];
//   for (let pricesForStock of closingPricesForAllStocks) {
//     changes.push(getPriceChangeForStock(pricesForStock));
//   }
//   return changes;
// }

// function getPriceChangeForStock(pricesForStock) { //function that calculates the change in price for a SINGLE stock
//   let priceChange =
//     pricesForStock[pricesForStock.length - 1] - pricesForStock[0];
//   return roundTo2Decimals(priceChange);
// }
////////////////////////////////////////////////////

/*
    As part of a financial report, we want to see what the highest price was for each stock in the last 5 days.
    Implement the below function, which
        - Takes 2 parameters:
            - the CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
            - the STOCKS array
        - Returns an array of strings describing what the highest price was for each stock.
            For example, the first element of the array should be: "The highest price of AAPL in the last 5 days was 180.33"
            The test will check for this exact string.
    The stock ticker should be capitalized.
    The price should be shown with exactly 2 decimal places.
*/

////////////////////// HELP! Did not manage to solve this //////////////////////////////

////////// My attempt /////////

function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
  let highestPriceForAllStocksArray = [];
  let highestPriceForOneStock = closingPricesForAllStocks[0]; // Assume the first stock price is the highest

  for (let i = 0; i < closingPricesForAllStocks.length; i++) {
    for (let j = 0; j < closingPricesForAllStocks[i].length; j++) {
      // start from 1 not 0 because you're comparing to 0
      let currentPriceForOneStock;
      if (highestPriceForOneStock < currentPriceForOneStock) {
        currentPriceForOneStock = highestPriceForOneStock[i]; // this current price takes the place of previous highestPriceForOneStock
      }
    }
    highestPriceForAllStocksArray.push(
      `The highest price of ${stocks[i]} in the last 5 days was ${Number(
        currentPriceForOneStock
      )}`
    );
  }

  return highestPriceForAllStocksArray;
}

//////////////////////

////// Solution provided by teachers //////

// function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
//   let descriptions = [];
//   for (let i = 0; i < closingPricesForAllStocks.length; i++) {
//     let highestPrice = getHighestPrice(closingPricesForAllStocks[i]); // passing function as a parameter in another function
//     descriptions.push(
//       `The highest price of ${stocks[i].toUpperCase()} in the last 5 days was ${highestPrice.toFixed(2)}`);
//   }
//   return descriptions;
// }

// function getHighestPrice(pricesForStock) {
//   // initializing to 0, as we're expecting this value to be overridden by the first price in the array
//   let highestPriceSoFar = 0;
//   for (let price of pricesForStock) {
//     // if this price is higher than the highest price we've seen so far, it becomes the new highest price
//     if (price > highestPriceSoFar) {
//       highestPriceSoFar = price;
//     }
//   }
//   return highestPriceSoFar;
// }

//////////////////////

/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the average price for each stock", () => {
  expect(getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)).toEqual([
    176.89, 335.66, 3405.66, 2929.22, 1041.93,
  ]);
});

test("should return the price change for each stock", () => {
  expect(getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)).toEqual([
    -6.2, -13.4, 23.9, -82.43, -162.77,
  ]);
});

test("should return a description of the highest price for each stock", () => {
  expect(
    highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS)
  ).toEqual([
    "The highest price of AAPL in the last 5 days was 180.33",
    "The highest price of MSFT in the last 5 days was 342.45",
    "The highest price of AMZN in the last 5 days was 3421.37",
    "The highest price of GOOGL in the last 5 days was 2958.13",
    "The highest price of TSLA in the last 5 days was 1101.30",
  ]);
});
