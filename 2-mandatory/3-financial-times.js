/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    // TODO
    // return allArticleTitles.filter( (element) =>element.length <= 65); from Aluns session 
    let newOnlyArticle = [];
    for (let i=0; i < allArticleTitles.length; i++) {
        if (allArticleTitles[i].length <=65) {
            newOnlyArticle.push(allArticleTitles[i] );
        } 
    } 
    return newOnlyArticle;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
    // TODO
    let fewestWordsSentence;
    let numberOfWords;
    for (let i=0; i < allArticleTitles.length; i++) {
          
        const sentence = allArticleTitles[i];
        
        const sentenceLengthInWords = title.split(" ").length;//breaks them to words
        if (!numberOfWords ) {
            numberOfWords = sentenceLengthInWords;
            fewestWordsSentence = sentence; //goes throught first book
        }
        else if (sentenceLengthInWords < numberOfWords) {
            numberOfWords = sentenceLengthInWords;
            fewestWordsSentence = sentence;
        }
       
    }
    return fewestWordsSentence;
}

// let a = "the girl";
// console.log(a.length); //return a string 8 
// let b = ["abc","ddd"];
// console.log(b.length)// 2
/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)

    used this as example
    // String with some numbers
const str = "Hello12345World!";

// Regular expression
const regex = /\d/;

// Check if string contians numbers
const doesItHaveNumber = regex.test(str);

console.log(doesItHaveNumber); // true
    https://dev.to/melvin2016/how-to-check-if-a-string-contains-at-least-one-number-using-regular-expression-regex-in-javascript-3n5h
*/
function headlinesWithNumbers(allArticleTitles) {
    // TODO
    const regex = /\d/;
    let newArrWithNumber = [];
    for (let i=0; i < allArticleTitles.length; i++) {
         if (regex.test(allArticleTitles[i]) ) {
             newArrWithNumber.push(allArticleTitles[i])
         }
    }
    return newArrWithNumber;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
    // TODO
    let totalCharacters = 0;
    for (let i=0; i <allArticleTitles.length; i++){
        totalCharacters = allArticleTitles[i].length + totalCharacters;
        
    }
    console.log(Math.round(totalCharacters/ allArticleTitles.length))
    return Math.round(totalCharacters / allArticleTitles.length);
} 
// let i = 0;
// while (i < allArticleTitles.length) {
//     totalCharacters = allArticleTitles[i].length + totalCharacters;
//     i++ 
// }



/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
    "Streaming wars drive media groups to spend more than $100bn on new content",//0
    "Amazon Prime Video India country head: streaming is driving a TV revolution",//1
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
