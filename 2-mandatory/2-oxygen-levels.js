/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

function findSafeOxygenLevel(levels) {

  //Predicate function checks if number in range, returns boolean
  function isSafeLevel(level) {  
    //1st condition: checks if string values are between 19.6 and 23.5, using string comparison
    //2nd checks if string item has % symbol, only including items with '%'
    //3rd checks if item has two 0s together, filters out '200%'
  return level > "19.6" && level < "23.5" && level.includes("%") && !level.includes('00');
}

//checks for conditions in levels array, returns 1st item value that is true 
let safeLevel = levels.find(isSafeLevel);
return safeLevel;
 }

/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid plants found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});
