/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];

var firstNameLength = [];

function getFirstNameLength(element){
  var nameSplit =element.split(" ");
  firstNameLength.push(nameSplit[0].length);
  return firstNameLength;
}

names.map(getFirstNameLength);

names[0] = names[0].substring(0, firstNameLength[0]);
names[1] = names[1].substring(0, firstNameLength[1]);
names[2] = names[2].substring(0, firstNameLength[2]);
names[3] = names[3].substring(0, firstNameLength[3]);
names[4] = names[4].substring(0, firstNameLength[4]);

names.forEach((name) => {
  console.log(name);
});

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/
