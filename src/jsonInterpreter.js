function parser(json) {
    console.log(json);
    const parsedData = {};
    parsedData.cityName = json.name;
    parsedData.temperature = json.main.temp;
    parsedData.temperatureCelsius = `${Math.round(parsedData.temperature - 273.13)} °C`;
    parsedData.temperatureFahren = `${Math.round((((parsedData.temperature - 273) * 9) / 5) + 32)} °F`;
    parsedData.main = json.weather[0].main;
    parsedData.description = json.weather[0].description;

    return parsedData;
}

export default parser;
