/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/



//take all numbers from array
function filteredArrayWithNumber (array){
  const arrayWithNumber = array.filter(element =>{ return Number(element) === element; });
  return arrayWithNumber;
}
//sorted array
function sortAges(arr) {
  const sortedArr = filteredArrayWithNumber(arr);
  return musasSortFunction(sortedArr);
//  return sortedArr.sort((a,b)=>a-b);
}
///***********SORTED ARRAY WITHOUT SORT() */
function musasSortFunction(array){
  const sortedArray =[];
//take all array 
  array.forEach(element => {
// for every element check new array
    for (let i = 0; i < array.length; i++) {
// if array empty, push your element and stop loop
      if(sortedArray.length === 0){ 
        sortedArray.push(element);
         break;
        }
//if element smaller or equal than sortedArray element, put before than it and stop loop
      if(element <=sortedArray[i]){
// console.log(`${element} smaller than ${sortedArray[i]} ----pushed array`);
        sortedArray.splice(i,0,element);
        break;
// if you can not find until end of the array, its biggest element. push end of the sortedArray
      }else if(i === sortedArray.length-1){//arayin sonuna gelindi sona ekle
        sortedArray.push(element);
        break;
      }
    }
  });
  // console.log(`SORTED SOLUTION: ${sortedArray} k<<<<<<<<<<<<<`);
  return sortedArray;
}
////npm run extra-tests
/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
