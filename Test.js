// let articleTitles = [
//     "Streaming wars drive media groups to spend more than $100bn on new content",
//     "Amazon Prime Video India country head: streaming is driving a TV revolution",
//     "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
//     "British companies look to muscle in on US retail investing boom",
//     "Libor to take firm step towards oblivion on New Year's Day",
//     "Audit profession unattractive to new recruits, says PwC boss",
//     "Chinese social media users blast Elon Musk over near miss in space",
//     "Companies raise over $12tn in 'blockbuster' year for global capital markets",
//     "The three questions that dominate investment",
//     "Brussels urges Chile's incoming president to endorse EU trade deal",
// ];

// function checkLengthOfHeadline (articleTitles) {
//     let arr = [];
//     for (i = 0; i < articleTitles.length; i++) {
//         if (articleTitles[i].length <= 65) {
//             arr.push(articleTitles[i]);
//         } 
//     } return arr;
// }

// function fewestWords (articleTitles) {
//     let shortest = "";
//     let fewestWordsSoFar = Number.MAX_VALUE;
//     for (i = 0; i < articleTitles.length; i++) {
//         let wordCount = articleTitles[i].match(/(\w+)/g).length;
//         if (wordCount < fewestWordsSoFar) {
//             fewestWordsSoFar = wordCount;
//             shortest = articleTitles[i];
//         }
//     } return shortest;
// }

// let arr = [];
// function headlinesWithNumbers(articleTitles) {
//     // TODO
//     for (let i = 0; i < articleTitles.length; i++) {
//         let letterNumber = /[0-9]+/;
//         if (articleTitles[i].match(letterNumber)) {
//             arr.push(articleTitles[i]);
//         }
//     }
//     return arr;
// }
// console.log(headlinesWithNumbers(articleTitles));



// function averageNumberOfCharacters(articleTitles) {
//     let ccTotal = 0;
//     let StringCount = 0;
//     for (i = 0; i < articleTitles.length; i++) {
//         StringCount = articleTitles.length;
//         let characterCount = articleTitles[i].length;
//         ccTotal += characterCount;
//     } return Math.round(ccTotal / StringCount);
// }
// console.log(averageNumberOfCharacters(articleTitles));

// We want to understand what the average price over the last 5 days for each stock is.
// Implement the below function, which
// - Takes this CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
// - Returns an array containing the average price over the last 5 days for each stock. 
// The average value should be rounded to 2 decimal places, and should be a number (not a string)



// function round2decimals(num) {
//     return Math.round(num * 100) / 100; 
// }

// function calculateAverages(singleStockPrice) {
//     let sum = 0;
//     for(price of singleStockPrice) {
//         sum += price;
//     }
//     return round2decimals(sum / singleStockPrice.length);
// }



// function averagePrices (CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
//     let arr = [];

//     for (singleStockPrice of CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
//         let average = calculateAverages(singleStockPrice);
//         arr.push(average)
//     }


//     return arr;
// }

// let result = averagePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);
// console.log(result);
// // console.table(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);





//  [-6.2, -13.4, 23.9, -82.43, -162.77] expected result


// function getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
  
//     let arr = [];

//     for (let i = 0; i < CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS.length; i++) {
//         let calculation = CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[i][4] - CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[i][0];
//         arr.push(+calculation.toFixed(2));
//     }
//     return arr;
// }

// console.log(getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS));



const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
];
//  "The highest price of AAPL in the last 5 days was 180.33",

// function highestPrice(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
//     let arr = [];
//     for (singlePrice of CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
//         arr.push(Math.max.apply(Math, singlePrice));
//     } return arr;
// }

// function priceAndStock(STOCKS, CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
//     let newArray = [];
//     let price = highestPrice(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);
//     for (let i = 0; i < STOCKS.length; i++) {
//         newArray.push("The highest price of " + STOCKS[i].toUpperCase() + " in the last 5 days was " + price[i]);
//     } return newArray;
// }

function highestPrice(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
    let arr = [];
    for (singlePrice of CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
        arr.push(Math.max.apply(Math, singlePrice));
    } return arr;
}

function highestPriceDescriptions(STOCKS, CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS) {
    let newArray = [];
    let price = highestPrice(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);
    for (let i = 0; i < STOCKS.length; i++) {
        newArray.push("The highest price of " + STOCKS[i].toUpperCase() + " in the last 5 days was " + price[i].toFixed(2));
    } return newArray;
}

console.log(highestPriceDescriptions(STOCKS, CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS))