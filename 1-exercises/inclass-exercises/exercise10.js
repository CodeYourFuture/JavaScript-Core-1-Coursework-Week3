/* Create an array of the people sitting around you
console.log the names in alphabetical order
Create a function that takes a name and an array of names as parameters.
If the name is not in the array, it should return “<name> is not sitting at the table with <people in the array>”
If the name is in the array, it should return “<name> is sitting at the table with <people in the array>”
Output <people in the array> as a comma-separated string */

nameArr = ["Alexi", "Vitalina", "Tony", "Shayan"];

function peopleAround(name,nameArr) {
    if (nameArr.includes(name)) {
        
        return name + " is sitting at the table with " + nameArr.join(", ") + ".";
    }
    else return name + " is not sitting at the table with " + nameArr.join(", ") + ".";
}

console.log(peopleAround("Karleen",nameArr));

nameArr.push("Karleen");
console.log(peopleAround("Karleen", nameArr));