/*const ARTICLE_TITLES = [
  "Streaming wars drive media groups to spend more than $100bn on new content",
  "Amazon Prime Video India country head: streaming is driving a TV revolution",
  "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
  "British companies look to muscle in on US retail investing boom",
  "Libor to take firm step towards oblivion on New Year's Day",
  "Audit profession unattractive to new recruits, says PwC boss",
  "Chinese social media users blast Elon Musk over near miss in space",
  "Companies raise over $12tn in 'blockbuster' year for global capital markets",
  "The three questions that dominate investment",
  "Brussels urges Chile's incoming president to endorse EU trade deal",
];
*/

const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];

function getAveragePrices(closingPricesForAllStocks) {
  //to find total and counter then avarage
  let returnedArray = [];

  for (let element of closingPricesForAllStocks) {
    let total = 0;
    let counter = 0;
    let avarage = 0;

    for (let elementOfelement of element) {
      total = total + elementOfelement;
      counter++;
    }
    avarage = total / counter;
    // Math.round((avarage * 100) / 100);
    returnedArray.push(Math.round(avarage * 100) / 100);
  }
  console.log(returnedArray);
  return returnedArray;
}
function getPriceChanges(closingPricesForAllStocks) {
  let returnedArray = [];
  for (let element of closingPricesForAllStocks) {
    // let changes = closingPricesForAllStocks[length-1]-closingPricesForAllStocks[i]
    let [...newArr] = element;
    let changes = newArr[newArr.length - 1] - newArr[0];
    // console.log(newArr, "the changes is ", changes);
    returnedArray.push(Math.round(changes * 100) / 100);
  }
  console.log(returnedArray);
  return returnedArray;
}

function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
  let returnedArray = [];
  let counter = 0;
  for (let element of closingPricesForAllStocks) {
    //let [...tempArray] = element;
    returnedArray.push(
      `The highest price of ${stocks[
        counter
      ].toUpperCase()} in the last 5 days was ${Math.max(...element)}`
    );
    counter++;
  }
  console.log(returnedArray);
  return returnedArray;
}

highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS);

// test("should return a description of the highest price for each stock", () => {
//   expect(
//     highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS)
//   ).toEqual([
//     "The highest price of AAPL in the last 5 days was 180.33",
//     "The highest price of MSFT in the last 5 days was 342.45",
//     "The highest price of AMZN in the last 5 days was 3421.37",
//     "The highest price of GOOGL in the last 5 days was 2958.13",
//     "The highest price of TSLA in the last 5 days was 1101.30",
//   ]);
// });
