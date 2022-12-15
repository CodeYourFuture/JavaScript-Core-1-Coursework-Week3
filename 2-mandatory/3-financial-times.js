/*const ARTICLE_TITLES2 = [
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

/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
  let newHeadLine = allArticleTitles.filter((el) => {
    return el.length <= 65;
  });
  return newHeadLine;
  // TODO
  //could potentislly use arr.filter(word => word.length <= 65)
}
/*
let test = potentialHeadlines(ARTICLE_TITLES);
test.map((el) => el.length);
console.log(test[3].length);
console.log(test.map((el) => el.length));
*/
//test.map((el)=> el.length);
/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
  //regex.match, and go with the fewest empty spaces
  let newArr = allArticleTitles.map((el) => el.split(" "));
  let neSort = newArr.sort((a, b) => a.length - b.length);
  console.log(neSort);
  return neSort[0].join(" ");
  // TODO
  //arr.sort(compare) use coompare function with array.lenthe
  //to get arr.length split sting at space (" "),
  //function compare(a,b){
  //  if(a.length > b.length){
  //   return -1}
  //  if(a.length < b.length){}
  //return 0
  //}
  //could potentislly use arr.filter(word => word.length > 6); // sort better fit
}
//let test2 = titleWithFewestWords(ARTICLE_TITLES);
//console.log(test2);
/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
    */
function headlinesWithNumbers(allArticleTitles) {
  // TODO
  let newArr = allArticleTitles.filter((el) => {
    //console.log(el);
    let found2 = /\d+/.test(el);
    //let regex = /[0-9]/g;
    //let found = el.match(regex).length > 0;
    //return el.match(/[0-9]/g).length < 0;
    return found2;
  });
  //console.log(newArr);
  //arr.filter((e) => {e.match(/{d}+/g !!== true }) // need to check syntax
  //}) use a regex function to macht for a number if return true should pass filter
  //return found;
  return newArr;
}
/*
function headlinesWithNumbers(allArticleTitles) {
        // TODO
        let newArr = allArticleTitles.filter((el) => {
            console.log(el);
            //result = el.
            let re = el.split();
            let found = re.map((elem)=> {
               if( Number(elem) === elem){
                return elem
               }
            });
            //return el.match(/[0-9]/g).length < 0;
            return found;
        });
        console.log(newArr);
        //arr.filter((e) => {e.match(/{d}+/g !!== true }) // need to check syntax
        //}) use a regex function to macht for a number if return true should pass filter
        //return found;
        return newArr;
    }
    */

//let test3 = headlinesWithNumbers(ARTICLE_TITLES);
//console.log(test3);
/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
  // TODO
  //split the string into an array with .split()
  let newArr = allArticleTitles.map((el) => el.length);
  console.log(newArr);
  let test = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(test);
  // can .join() and split agin or use regex to replace white space with empty string
  /// could potentialy use regex to match all the characteres /[a-z]+[0-9]+gi/ need to check syntax
  /// if can match all infividual caharacters you can use the number to get the average
  //use the arr.reduce( fill with syntax)
  //divide return value from reduce by array.length (note would need to factor in white space in count unless included in characters)to get the average
  return Math.round(test / newArr.length);
}
//averageNumberOfCharacters(ARTICLE_TITLES);
//let test5 = averageNumberOfCharacters(ARTICLE_TITLES2);
//console.log(test5);
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
  expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(
    new Set([
      "British companies look to muscle in on US retail investing boom",
      "Libor to take firm step towards oblivion on New Year's Day",
      "Audit profession unattractive to new recruits, says PwC boss",
      "The three questions that dominate investment",
    ])
  );
});

test("should return an empty array for empty input", () => {
  expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
  expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual(
    "The three questions that dominate investment"
  );
});

test("should only return headlines containing numbers", () => {
  expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(
    new Set([
      "Streaming wars drive media groups to spend more than $100bn on new content",
      "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    ])
  );
});

test("should return the average number of characters in a headline", () => {
  expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
