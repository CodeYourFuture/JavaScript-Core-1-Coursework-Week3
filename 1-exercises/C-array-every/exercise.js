/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

//! for test purpose
let students1 = ["Austine", "Dany", "Swathi", "Daniel"];
let group1 = ["Austine", "Dany", "Swathi", "Daniel"];

function isEqual(group) {
  return students.indexOf(group) >= 0;
}

if (group.every(isEqual)) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
