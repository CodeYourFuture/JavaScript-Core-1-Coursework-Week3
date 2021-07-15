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

function sortAges(arr) {
  // 1) create an empty array for numbers
  const onlyNumbersArr = [];
  // 2) iterate through arr and push numbers to the empty array of numbers
  arr.forEach(element => {
    if(typeof element === 'number') {
      onlyNumbersArr.push(element);
    }
  });
  // 3) sort the numbers in array of numbers without using sort method and then return it
  let done = false;
  while(!done) {
    done = true;
    for(let i = 1; i < onlyNumbersArr.length; i++) {
      if(onlyNumbersArr[i - 1] > onlyNumbersArr[i]) {
        done = false;
        let tmp = onlyNumbersArr[i - 1];
        onlyNumbersArr[i - 1] = onlyNumbersArr[i];
        onlyNumbersArr[i] = tmp;
      }
    }
  }
  return onlyNumbersArr;
}

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
