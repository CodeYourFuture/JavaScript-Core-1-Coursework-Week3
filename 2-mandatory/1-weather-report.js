/*
    Imagine we're making a weather app!
    
    We have a list of cities that the user wants to track.
    We also already have a temperatureService function which will take a city as a parameter and return a temparature.

    Implement the function below:
        - take the array of cities as a parameter
        - return an array of strings, which is a statement about the temperature of each city.
            For example, "The temperature in London is 10 degrees"
        - Hint: you can call the temperatureService function from your function
*/

function getTemperatureReport(cities) {
    // TODO

const temperatureReport = [];

    for(let i = 0; i < cities.length; i++) {
        const temperature = temperatureService(cities[i]);

        temperatureReport.push(`The temperature in ${cities[i]} is ${temperature} degrees`);
    }

    return temperatureReport;
}
// I start with a function getTemperatureReport.
// It has an array cities as parameter. Then a const variable equals to an empty array. A for loop is used to iterate 
// over each city in the cities array. During each iteration, the temperatureService function is called with the current
//  city as its argument to get the current temperature of that city. This temperature is then stored in a temperature 
// variable. Finally, a string is constructed using template literals and the current city and temperature, and this string
//  is added to the temperatureReport array using the push() method. After all cities have been processed, the temperatureReport array is returned by the function.

/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
    let temparatureMap  = new Map();

    temparatureMap.set('London', 10);
    temparatureMap.set('Paris', 12);
    temparatureMap.set('Barcelona', 17);
    temparatureMap.set('Dubai', 27);
    temparatureMap.set('Mumbai', 29);
    temparatureMap.set('São Paulo', 23);
    temparatureMap.set('Lagos', 33);
    
    return temparatureMap.get(city);
}

test("should return a temperature report for the user's cities", () => {
    let usersCities = [
        "London",
        "Paris",
        "São Paulo"
    ]

    expect(getTemperatureReport(usersCities)).toEqual([
        "The temperature in London is 10 degrees",
        "The temperature in Paris is 12 degrees",
        "The temperature in São Paulo is 23 degrees"
    ]);
});

test("should return a temperature report for the user's cities (alternate input)", () => {
    let usersCities = [
        "Barcelona",
        "Dubai"
    ]

    expect(getTemperatureReport(usersCities)).toEqual([
        "The temperature in Barcelona is 17 degrees",
        "The temperature in Dubai is 27 degrees"
    ]);
});

test("should return an empty array if the user hasn't selected any cities", () => {
    expect(getTemperatureReport([])).toEqual([]);
});