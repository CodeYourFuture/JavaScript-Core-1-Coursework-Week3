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

/*
for (i=0 ; i < names.length; i++) {
  console.log(names[i]);
}; */



tempElem = [];

var spaceIndex = names.map(function (element, index){

    console.log(element.indexOf(" "));
    return element.indexOf(" ");
    
  });


console.log(spaceIndex);


for (let i=0 ; i < names.length ; i ++){
  names[i] = names[i].substring(spaceIndex[i]);
}



/*names[0] = names[0].substring(spaceIndex[0]);
names[1] = names[1].substring();
names[2] = names[2].substring();
names[3] = names[3].substring();
names[4] = names[4].substring();*/

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
