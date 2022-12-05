/* Let’s get some practice using splice(). 
let fruits = ["orange", "apple", "banana"];
Can you replace “apple” with both “kiwi” and “mango”?
Can you use splice to replicate the behaviour of unshift, by adding “peach” to the beginning of the array?
*/

let fruits = ["orange", "apple", "banana"];
fruits.splice(1, 1, "kiwi", "mango");

console.log(fruits);

fruits.splice(0, 0, "peach");
console.log(fruits);
