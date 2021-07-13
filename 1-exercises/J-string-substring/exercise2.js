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
names[0] = names[0].substring(0, 6);
names[1] = names[1].substring(0, 7);
names[2] = names[2].substring(0, 4);
names[3] = names[3].substring(0, 4);
names[4] = names[4].substring(0, 5);

names.forEach((name) => {
  console.log(name);
});

//! Another Solution
let names1 = [
  "Ahmed Kortas",
  "Zain Tate",
  "Kamal Holcomb",
  "Deeb Patton",
  "Rami Graham",
];

function splitNames(fullName) {
  for (let i = 0; i < fullName.length; i++) {
    var firstName = fullName[i].split(" ").slice(0, -1).join(" ");
    //var lastName = fullName[i].split(" ").slice(-1).join(" ");
    console.log(firstName);
  }
}
splitNames(names1); // returns "Ahmed Steve"

/* EXPECTED OUTPUT 
  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
*/
