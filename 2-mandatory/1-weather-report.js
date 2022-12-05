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

let userCities = ["London", "Paris", "Sao Paulo"];
function getTemperatureReport(userCities) {
    // TODO
   
    for (city of userCities) {
        if (city === "") {
            console.log("The temperature in " + city + " is " + "[]" + " degrees");
        }
        else {
        console.log(`The temperature in ${city} is ${temperatureService(city)} degrees`);
    } 
    /* for (let i = 0; i < cities.length; i++) {
        console.log("The temperature in " + cities[i] + " is " + temperatureService() + " degrees.");
    } */
}

}

getTemperatureReport(userCities);

userCities.splice(0,3, "Barcelona", "Dubai", "");

getTemperatureReport(userCities);



/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
    let temparatureMap  = new Map();

    temparatureMap.set('London', 10);
    temparatureMap.set('Paris', 12);
    temparatureMap.set('Barcelona', 17);
    temparatureMap.set('Dubai', 27);
    temparatureMap.set('Mumbai', 29);
    temparatureMap.set('Sao Paulo', 23);
    temparatureMap.set('Lagos', 33);
    
    return temparatureMap.get(city);
}

temperatureService(city);

/*
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
}); */