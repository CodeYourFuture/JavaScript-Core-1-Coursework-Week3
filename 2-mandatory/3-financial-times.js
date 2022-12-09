/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    // TODO
    let articleTitlesUnder65 = []
    for (let title of allArticleTitles) {
        if (title.length <= 65) {
            articleTitlesUnder65.push(title)
        }
    }
    return articleTitlesUnder65
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
    // TODO
    // let word = 0
    // do {
    //     countingWords(allArticleTitles[word]
    //         )
    // }

    let articleTitle = 0;
    let shortestTitle = 0
    let shortestTitleWords = countingWords(allArticleTitles[articleTitle]);
    for (let articleTitle = 1; articleTitle < allArticleTitles.length; articleTitle++){
        if (countingWords(allArticleTitles[articleTitle]) < shortestTitleWords) {
            shortestTitleWords = countingWords(allArticleTitles[articleTitle]);
            shortestTitle = articleTitle;
        } 
    }

    return allArticleTitles[shortestTitle];
}

function countingWords(string) {
    let numberOfSpaces = 0
    let b = string.length
    let character = 0
    while (character < b) {
        if (string[character] === " ") {
        numberOfSpaces++
        }
        character++;
    }
    let numberOfWords = numberOfSpaces + 1;
    return numberOfWords;
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
    // TODO
    let arrayNumbers = [];
    for (let article of allArticleTitles) {
        if (containsNumbers(article) === true) {
            arrayNumbers.push(article);
        }
    }
    return arrayNumbers;
}

    function containsNumbers(str) {
  return /\d/.test(str);
}



/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
    // TODO
    let sample = allArticleTitles.length
    let sum = 0
    for (let article = 0; article < sample; article++) {
        sum = sum + allArticleTitles[article].length;
    }
    return Math.round(sum / sample);

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
