/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function getEligibleStudents(students) {
  //takes array and checks if students attendance count student/element(index 1) >=8
  //returns filtered array
  //further filter eligible array, so only names show. Use .map() + .shift()?
  const eligibleStudents = students.filter((student) => student[1] >= 8);
  //    return eligibleStudents[0][0]; //gets 'Ahmed'
  // return eligibleStudents[2]; //gets '8'
  //return eligibleStudents; //gets all eligible arrays, incl their count
 
  //removes numbers, but gives 'array' after each element
  // const onlyEligibleNames = eligibleStudents.map(student => student.slice(0,1));
  // return onlyEligibleNames; 
//takes eligibleStudents array, iterates each student element, outputs just item(name) using .shift()
const onlyEligibleNames = eligibleStudents.map((student) => student.shift());
return onlyEligibleNames;
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
