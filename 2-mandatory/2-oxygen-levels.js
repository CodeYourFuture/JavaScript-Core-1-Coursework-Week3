/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring().
*/

// npm test -- --testPathPattern 2-oxygen-levels

function findSafeOxygenLevel(array) {
  return array.find((element) => {
    let numWithoutPercentage = element.substring(0, element.length - 1); //Removing '%' symbol from the string
    numWithoutPercentage = parseFloat(numWithoutPercentage); // Changing the string  into a floating number
    return numWithoutPercentage > 19.5 && numWithoutPercentage < 23.5;
  });
}

/*
Left this in here so I could review it later
First solution but needs refactoring:

function findSafeOxygenLevel(array) {
  const numWithoutPercentage = array.map((element) => {
    if (element.includes("%")) {
      let number = element.substring(0, element.length - 1);
      newNumber = parseFloat(number);
      return newNumber;
    } else return Array.isArray(array) && array.length;
  });
  const firstSafePlanet = numWithoutPercentage.find(
    (element) => element > 19.5 && element < 23.5
  );
  const safePlanetFound = numWithoutPercentage.indexOf(firstSafePlanet);
  return array[safePlanetFound];
}
*/

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
