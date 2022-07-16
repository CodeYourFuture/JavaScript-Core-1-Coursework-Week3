let temperatureReport = [];

function getTemperatureReport(cities) {
  // TODO
  for (let i = 0; i < cities.length; i++) {
    temperatureReport.push(
      `The temperature in ${cities[i]} is ${temperatureService(
        cities[i]
      )} degrees`
    );
  }
  return temperatureReport;
}

function temperatureService(city) {
  let temparatureMap = new Map();

  temparatureMap.set("London", 10);
  temparatureMap.set("Paris", 12);
  temparatureMap.set("Barcelona", 17);
  temparatureMap.set("Dubai", 27);
  temparatureMap.set("Mumbai", 29);
  temparatureMap.set("São Paulo", 23);
  temparatureMap.set("Lagos", 33);

  return temparatureMap.get(city);
}

let usersCities = ["London", "Paris", "São Paulo"];

let output = getTemperatureReport(usersCities);

console.log(output);
