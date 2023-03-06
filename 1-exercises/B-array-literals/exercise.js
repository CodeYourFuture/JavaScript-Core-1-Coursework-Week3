/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // add numbers from 1 to 10 into this array
let mentors = ["Daniel", "Irina", "Rares"]; // Create an array with the names of the mentors: Daniel, Irina and Rares

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);
console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  [1,2,3,4,5,6,7,8,9,10]
  ['Daniel', 'Irina', 'Rares']
*/
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

// function headlinesWithNumbers(allArticleTitles) {
//     let numberArray =[]
//     for (item of allArticleTitles){
//       // console.log("item", item)
//       // const test = item.split("")
//       for(let el of item) {
//         el = parseInt(el)
//         if(item.includes(el)) {
//           console.log("el", el)
//            return item
//         }
//               numberArray.push(item)
//         // console.log("el", typeof el, el)
//       }
          
//     } 
//     console.log("numberArray", numberArray)
//     return numberArray;
    
// }

function averageNumberOfCharacters(allArticleTitles) {
    sumOfStrings=[]
    for (item of allArticleTitles){
        let itemLenght = item.length
       sumOfStrings.push(itemLenght)
       } 
    const initialValue = 0;
   const sumWithInitial = sumOfStrings.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   initialValue
);
console.log("Summ of all in array", Math.floor(Math.round(sumWithInitial/allArticleTitles.length)))
    return Math.floor(Math.round(sumWithInitial/allArticleTitles.length))
    }

    averageNumberOfCharacters(ARTICLE_TITLES)


titleWithFewestWords(ARTICLE_TITLES)