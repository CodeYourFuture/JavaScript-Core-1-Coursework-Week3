/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function groupIsOnlyStudents() {
    for (let i=0 ; i < students.length ; i++){
      console.log(students[i]);
      if (group.every((element) => {element === students[i]})) {
        return true;
      } 
    }
} 

// Note I had to change the code below to add () after groupIsOnlyStudents to initialise my function. 

if (groupIsOnlyStudents()) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
