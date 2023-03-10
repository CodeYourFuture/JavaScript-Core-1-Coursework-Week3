/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    // TODO
    headlines = []; // we declare an empty array so when we get the headlines with length<=65 we push them here

    for (article of allArticleTitles) { // we loop through all articles  and check their length
        if (article.length <= 65) {
            headlines.push(article); //for every headline that  passes the condition we push it to the empty array
        }

    }
    return headlines; //then we return the array with the headlines that have <=65 words
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be separated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
    // TODO
    fewestWordsTitle = ''; //we use an empty string since we haven't had yet any article to display 
    titleLengthNr = Infinity; //we can use any limit we want too but we want to make sure that the limit for the comparison it's not very small so it can fit all headlines available

    headlines = potentialHeadlines(allArticleTitles) //we get the function above by saying that headlines is inside this function as mentioned
    //console.log(headlines) i used console.log to see if my headlines was displaying or not

    for (headline of headlines) { //we loop through each headline from headlines array
        // console.log(headline)
        titleLength = headline.split(' ').length; //we calculate te length by splitting each headline to words and  not counting spaces .
        //console.log(titleLength)

        if (titleLength < titleLengthNr) { //and compare it with the value we first gave the variable
            fewestWordsTitle = headline; //the title with the smallest amount of words is going to be displayed in the variable fewestWords
            titleLengthNr = titleLength; /*since we didn't have a starting value we used infinity to compare the length but after we passed the length of 
            at least one headline we compare it then to that and then let the function know that are the same  */
        }
    }
    return fewestWordsTitle; //function is going to  return the headline with the fewest words 
}

/*
    The editor of the FT has realized that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
    // TODO
    function withNumber(title) {
        if (title.search('[0-9]') >= 0) {
            return true;
        } else {
            return false;
        }

    }
    return allArticleTitles.filter(withNumber); // shorter way explained by our buddy so i thought to implement it 
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
    // TODO
  let totalChars = allArticleTitles.reduce((total, headline) => total + headline.length, 0); // we use reduce() method  to store total nr of characters in all headlines,starting value is set to 0
  let averageChars = Math.round(totalChars / allArticleTitles.length);
  return averageChars;
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
