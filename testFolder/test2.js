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


// console.log(temperatureService( "Dubai"))

function getTemperatureReport(cities) {
    let arr = [];
    for (const element of cities) {
        if (temperatureService(element)) {
           arr.push(`The temperature in ${element} is ${temperatureService(element)} degrees`);
        } 
    }return arr;
       
}

let usersCities = [
        "London",
        "Paris",
        "São Paulo"
    ]

console.log(getTemperatureReport(usersCities))