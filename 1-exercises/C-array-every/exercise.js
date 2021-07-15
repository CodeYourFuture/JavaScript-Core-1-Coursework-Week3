/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

//New predicate declared
function isStudent (name) {
   return students.includes(name); //check if students array contains element, returns boolean
}

//iterates group array to check if every string element is included in students array, returns boolean
var groupIsOnlyStudents = group.every(isStudent); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
