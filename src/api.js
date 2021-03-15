const api = (function api() {
    async function getCurrentDayJSON(input) {
        // api-key 27c3d65562423ed20d7681f16c2990e2
        let chosenCity = input;
        let weatherJson;
        if (!chosenCity) {
            chosenCity = "Bled";
        }
        try {
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=27c3d65562423ed20d7681f16c2990e2`;
            let apiResponse = await fetch(apiUrl);
            if(apiResponse.status !== 200) {
                throw new Error(`Response ${apiResponse.status}, incorected input highly likely.`);
            }
            weatherJson = await apiResponse.json();
        }
        catch (error) {
            console.log("OWM not responding", error);
        }
        return weatherJson;
    }
    return { getCurrentDayJSON };
}());
export default api;
