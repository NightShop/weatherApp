const api = (function api() {
    async function getCurrentDayJSON(input) {
        // api-key 27c3d65562423ed20d7681f16c2990e2
        let chosenCity = input;
        if (!chosenCity) {
            chosenCity = "Bled";
        }
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=27c3d65562423ed20d7681f16c2990e2`;
        return fetch(apiUrl)
            .then((resolve) => {
                if (resolve.status !== 200) {
                    throw new Error(resolve.status);
                }
                console.log("fetch succesfull");
                return resolve;
            })
            .then((resolve) => resolve.json())
            .catch((err) => {
                alert("You misspelled name of the city or it is not in our databse");
                console.log(err);
            });
    }
    return { getCurrentDayJSON };
}());
export default api;
