/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

//Psuedo-code
  //Check element is an array with Array.isArray(element)
  //Check element.length === 2
  //Return result of expression
//     return element.length === 2 && element

var pairsByIndex =  pairsByIndexRaw.filter(function(element) {
        if (Array.isArray(element) && element.length === 2) {
          return pairsByIndexRaw;
        }
})    // Complete this statement

//Can also be solved this way:
//  function isArrayAndPair(element) { 
//       if (Array.isArray(element) && element.length === 2) {
//           return pairsByIndexRaw;
//      } }

// var pairsByIndex =  pairsByIndexRaw.filter(isArrayAndPair)          // Complete this statement

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
