/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
function first5(array) {
  let size = 5;
  return (items = array.slice(0, size));
}
console.log(first5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //! Debug
/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the same elements, except sorted.
*/

function sortArray(arr) {
  valueResult = arr.sort();
  return valueResult;
}

var animals = ["cat", "dog", "elephant", "bee", "ant"]; //! Debug
console.log(sortArray(animals)); //! Debug

/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/

let nameRaw = [
  "  /Daniel",
  " /Sanyia",
  "AnTHonY",
  "irina",
  " Gordon",
  "ashleigh   ",
  "   Alastair  ",
  " anne marie  ",
];

function tidyUpString(arr) {
  for (i = 0; i < arr.length; i++) {
    let fNameRaw = nameRaw[i].trim().replace("/", "").toLowerCase();
    console.log(fNameRaw);
  }
}

tidyUpString(nameRaw); //! Debug

/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array containing the same elements, but without the element at the passed index.
*/
var testArray1 = [0, 1, 2, 3, 4, 5];

function remove(origArray, arrIndex) {
  let i = arrIndex;
  let cloneArray = origArray.slice();
  cloneArray.splice(i, 1);
  console.log(cloneArray.join(", "));
}
remove(testArray1, 3); //! Debug

/*
Write a function that:
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/
let testArray5 = [23.58447, 18.103, 187.2, 0.372];
//console.log(testArray5[0].toFixed(2));

function formatPercentage(newArr) {
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > 100) {
      let maxValue = 100;
      newArr[i] = maxValue;
      console.log(newArr[i]);
    } else if (newArr[i] < 100) {
      console.log(newArr[i].toFixed(2));
    }
  }
}
formatPercentage(testArray5); //! DEBUG

/* ======= TESTS - DO NOT MODIFY ===== */

test("first5 function works for more than five elements", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const copyOfOriginal = numbers.slice();
  expect(first5(numbers)).toEqual([1, 2, 3, 4, 5]);
  // Make sure first5 didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test("first5 function returns a a smaller array for fewer than five elements", () => {
  const letters = ["z", "y", "x"];
  const copyOfOriginal = letters.slice();
  expect(first5(letters)).toEqual(["z", "y", "x"]);
  // Make sure first5 didn't change its input array.
  expect(letters).toEqual(copyOfOriginal);
});

test("sortArray function returns a sorted version of the array", () => {
  expect(sortArray(["a", "n", "c", "e", "z", "f"])).toEqual([
    "a",
    "c",
    "e",
    "f",
    "n",
    "z",
  ]);
});

test("sortArray function doesn't change the passed in array", () => {
  const before = ["a", "n", "c", "e", "z", "f"];
  const copy = before.slice();
  sortArray(before);
  expect(before).toEqual(copy);
});

test("tidyUpString function works", () => {
  expect(
    tidyUpString([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ])
  ).toEqual([
    "daniel",
    "sanyia",
    "anthony",
    "irina",
    "gordon",
    "ashleigh",
    "alastair",
    "anne marie",
  ]);
});

describe("remove function", () => {
  test("removes index 0", () => {
    expect(remove([1, 2, 3], 0)).toEqual([2, 3]);
  });

  test("removes middle index", () => {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
  });

  test("removes end index", () => {
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  test("removes only index", () => {
    expect(remove(["hi"], 0)).toEqual([]);
  });

  test("ignores missing index", () => {
    expect(remove(["hi"], 10)).toEqual(["hi"]);
  });

  test("doesn't modify input array", () => {
    let initial = [1, 2, 3];
    remove(initial, 1);
    expect(initial).toEqual([1, 2, 3]);
  });
});

test("formatPercentage function works", () => {
  expect(formatPercentage([23, 18.103, 187.2, 0.372])).toEqual([
    "23%",
    "18.1%",
    "100%",
    "0.37%",
  ]);
});
