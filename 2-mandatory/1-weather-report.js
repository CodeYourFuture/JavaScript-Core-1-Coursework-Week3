/*
    Imagine we're making a weather app!
    
    We have a list of cities that the user wants to track.
    We also already have a temperatureService function which will take a city as a parameter and return a temperature.

    Implement the function below:
        - take the array of cities as a parameter
        - return an array of strings, which is a statement about the temperature of each city.
            For example, "The temperature in London is 10 degrees"
        - Hint: you can call the temperatureService function from your function
*/

    function getTemperatureReport(cities){
        const statement = [];
        for(const city of cities){
        const temperature = temperatureService(city)
        statement.push(`The temperature in ${city} is ${temperature} degrees`)
        }
        return statement;
    }

/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
    let temperatureMap  = new Map();

    temperatureMap.set('London', 10);
    temperatureMap.set('Paris', 12);
    temperatureMap.set('Barcelona', 17);
    temperatureMap.set('Dubai', 27);
    temperatureMap.set('Mumbai', 29);
    temperatureMap.set('São Paulo', 23);
    temperatureMap.set('Lagos', 33);
    
    return temperatureMap.get(city);
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