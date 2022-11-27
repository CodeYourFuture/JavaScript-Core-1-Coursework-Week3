/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/

function potentialHeadlines(allArticleTitles) {
    return allArticleTitles.filter(element => element.length <= 65)
}

// console.log(potentialHeadlines(ARTICLE_TITLES));
// ["British companies look to muscle in on US retail investing boom", "Libor to take firm step towards oblivion on New Year's Day", "Audit profession unattractive to new recruits, says PwC boss", "The three questions that dominate investment"]

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/

function titleWithFewestWords(allArticleTitles) {
    return allArticleTitles.sort((elementOne, elementTwo) => elementOne.split(" ").length - elementTwo.split(" ").length)[0]

    // return allArticleTitles[allArticleTitles.map((element) => element.split(" ").length).indexOf(Math.min(...allArticleTitles.map((element) => element.split(" ").length)))];
    // ^ this is ridiculous but it works allArticleTitles[dynamic index]

    // allArticleTitles.reduce((pV,cV) => pV.split(" ").length <= cV.split(" ").length ? pV : cV);
    // ^ I WANT TO LEARN HOW TO DO THIS WITH REDUCE -- HELP!
}

// console.log(titleWithFewestWords(ARTICLE_TITLES));
// "The three questions that dominate investment"


/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/

function headlinesWithNumbers(allArticleTitles) {
    // const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    // let result = [];
    // for (let i = 0; i < allArticleTitles.length; i++) {
    //     for (let j = 0; j < allArticleTitles[i].length; j++) {
    //         if (numbers.includes(allArticleTitles[i][j])) {
    //             result.push(allArticleTitles[i]);
    //             break;
    //         }
    //     }
    // }
    // return result;

    // return allArticleTitles.filter(element => /\d+/.test(element));
    // ^ i refuse to use regex :)

    return allArticleTitles.filter(element => [...element].find(number => number >= "0" && number <= "9"));
}

// console.log(headlinesWithNumbers(ARTICLE_TITLES));


/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/


function averageNumberOfCharacters(allArticleTitles) {
    return Math.round(
        allArticleTitles
        // .map(element => [...element].filter(element => element !== " ").length)
        // ^ why does the test include whitespace, they are not characters?...
        .map(element => element.length)
        .reduce((pV, cV) => pV + cV) 
        / allArticleTitles.length
        );
}

// console.log(averageNumberOfCharacters(ARTICLE_TITLES));


/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
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

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
    expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(new Set([
        "British companies look to muscle in on US retail investing boom",
        "Libor to take firm step towards oblivion on New Year's Day",
        "Audit profession unattractive to new recruits, says PwC boss",
        "The three questions that dominate investment"
    ]));
});

test("should return an empty array for empty input", () => {
    expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
    expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual("The three questions that dominate investment");
});

test("should only return headlines containing numbers", () => {
    expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(new Set([
        "Streaming wars drive media groups to spend more than $100bn on new content",
        "Companies raise over $12tn in 'blockbuster' year for global capital markets"
    ]));
});

test("should return the average number of characters in a headline", () => {
    expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
