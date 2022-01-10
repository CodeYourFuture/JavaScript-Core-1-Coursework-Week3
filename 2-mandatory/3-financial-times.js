/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles 
    which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    let newArr=[];
    for (const article of allArticleTitles) {
            if (article.length <= 65)
                    newArr.push(article);
    }
    return newArr;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be separated by a space)
*/

function titleWithFewestWords(allArticleTitles) {
    let count = Infinity, howmany, result = ''; // Nothing can be greater than 'Infinity' so I start of with count=Infinity
    for (const article of allArticleTitles) {
            howmany = article.split(" ").length; // Determine the number of words
            if (howmany < count) // Is it lower than the previous value?
            {
                    count = howmany // Yes! Then update
                    result = article;
            }
     }
    return result;
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/

function headlinesWithNumbers(allArticleTitles) {
    let newArr=[];
    for (const article of allArticleTitles) {
            let numFound = false; // flag used to check if a digit was found
            for (let aCharacter of article) { // go through each character in the article
                 if (aCharacter >= '0' && aCharacter <= '9') // Is it a digit?
                 {
                     numFound = true; // set flag to TRUE
                     break; // no point in continuing the loop - leave the loop
                 }   
            }

            if (numFound)
                newArr.push(article); // if a digit was found add article to newArr
    }
    return newArr;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/

function averageNumberOfCharacters(allArticleTitles) {
    let sum=0;
    for (const article of allArticleTitles)
            sum += article.length; // count up all the entire number of characters in 'allArticleTitles'
    return Math.round(sum / allArticleTitles.length); // divide by the number of articles, rounding to nearest integer
}



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
