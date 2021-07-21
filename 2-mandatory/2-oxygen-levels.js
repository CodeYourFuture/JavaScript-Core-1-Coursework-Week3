/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

function findSafeOxygenLevel(safeLevels) {
  //check to see if array value is a percentage 
  const arrayFiltered = safeLevels.filter(level => level.includes("%"));
  //using the return of the variable above, remove the "%" and turn string into a number
  const filterResult = arrayFiltered.map(oxygenLevel => oxygenLevel.replace("%", "")).map(Number);
  //check to see if returned value is between the two margins set
  const safePlanets = filterResult.find(levels => levels > 19.5 && levels < 23.5);
  //check to see if result meets criteria, else will return undefined
    if(safePlanets)
  //add the percentage symbol back to the result
      return `${safePlanets}%`;
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
