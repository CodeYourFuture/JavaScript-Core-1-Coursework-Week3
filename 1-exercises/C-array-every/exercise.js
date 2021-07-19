/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

// function findName(name) {
//   return students.includes(name);
// }

// var groupIsOnlyStudents = group.every(findName);

var groupIsOnlyStudents = group.every((element) => {
  return students.includes(element);
});

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */
// test passed
// The group does not contain only students
