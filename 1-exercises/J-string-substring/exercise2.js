/**
 * /*
 *   You are given an array with a list of names.
 *
 *   You should log only the peoples first names.
 *
 *   For example, if the name is "John Smith" you should return "John"
 *
 * @format
 */

const names = [
	"Tamzin Lindsay",
	"Jessica Tate",
	"Tony Holcomb",
	"Shae Patton",
	"Arron Graham",
];

const name = names
	.map((element) => element.substring(0, element.indexOf(" ")))
	.forEach(function (name) {
		console.log(name);
	});

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/
