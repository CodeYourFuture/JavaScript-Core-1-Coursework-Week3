/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];
// function isArrayWith2Element (element) {
//   return (Array.isArray(element)) && (element.length === 2);
// }
// const pairsByIndex = pairsByIndexRaw.filter(isArrayWith2Element); // Complete this statement
const pairsByIndex = pairsByIndexRaw.filter(element => {
  return (Array.isArray(element)) && (element.length === 2);
});

const students = ["Islam", "Lesley", "Harun", "Rukmini"];
const mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
