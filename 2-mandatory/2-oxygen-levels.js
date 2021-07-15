/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

function findSafeOxygenLevel(oxygenLevels) {
  const firstPlanet = oxygenLevels.find(element =>
    element.substring(0, 4) > 19.5 &&
    element.substring(0, 4) < 23.5 &&
    element.substring(0, 5).includes("%")
    );
    return firstPlanet;
  // const levelInNum = oxygenLevels.map(num =>
  //   num.replace("%", ""));
  // const firstPlanet = levelInNum.find(oxygenLevel => oxygenLevel.substring(0, 5) > 19.5 && oxygenLevel.substring(0, 5) < 23.5);
  // return (`${firstPlanet}%`)
}



// const arrayWithoutPercentage = [];
//   oxygenLevels.forEach((element) =>
//     arrayWithoutPercentage.push(element.substring(0, element.length - 1))
//   );

//   for (percent of arrayWithoutPercentage) {
//     if (percent > 19.5 && percent < 23.5) {
//       return `${percent}%`;
//     }
//   }

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
