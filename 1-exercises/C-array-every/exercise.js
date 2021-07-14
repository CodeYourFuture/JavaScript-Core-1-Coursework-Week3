/*
   This program should check if the array `group` contains only students
*/

const students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
const group = ["Austine", "Dany", "Swathi", "Daniel"];

function isStudentInGroup(name) {
  if (students.includes(name)) {
    return true;
  } else {
    return false;
  }
}
// console.log(groupIsOnlyStudents("Daniel"));

const groupIsOnlyStudents = group.every(isStudentInGroup);
console.log(groupIsOnlyStudents);
// complete this statement

// if (groupIsOnlyStudents(students, group)) {
//   console.log("The group contains only students");
// } else {
//   console.log("The group does not contain only students");
// }

/* EXPECTED RESULT */

// The group does not contain only students
