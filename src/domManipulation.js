const dom = (function dom() {
    function createWeatherDiv(weatherObj) {
        if(!weatherObj) {
            return "";
        }
        const parsedData = {};
        parsedData.cityName = weatherObj.name;
        parsedData.temperature = weatherObj.main.temp;
        parsedData.temperatureCelsius = `${Math.round(parsedData.temperature - 273.13)} °C`;
        parsedData.temperatureFahrenheit = `${Math.round((((parsedData.temperature - 273) * 9) / 5) + 32)} °F`;
        parsedData.main = weatherObj.weather[0].main;
        parsedData.description = weatherObj.weather[0].description;

        const nodeList = Object.keys(parsedData).map((property) => {
            const newNode = document.createElement("div");
            newNode.classList.add("data");
            newNode.textContent = parsedData[property];
            newNode.id = property;
            return newNode;
        });

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;

        nodeList.push(weatherIcon);

        getGifImg(parsedData.description)
            .then(img => container.appendChild(img));


        const container = document.createElement("div");
        container.classList.add("weatherNode");

        container.append(...nodeList);

        return container;
    }

    function toggleTemp(degree) {
        const temperatureFahrenheit = document.querySelector("#temperatureFahrenheit");
        console.log("2");
        console.log(temperatureFahrenheit);
        const temperatureCelsius = document.querySelector("#temperatureCelsius");
        if (degree === "celsius") {
            temperatureFahrenheit.style.display = "none";
            temperatureCelsius.style.display = "";

            return "celsius";
        } else if (degree === "fahrenheit") {
            temperatureFahrenheit.style.display = "";
            temperatureCelsius.style.display = "none";

            return "fahrenheit";
        } else {
            return "";
        }
    }

    function deleteWeatherDiv() {
        const weatherDiv = document.querySelector(".weatherNode");
        if (weatherDiv) {
            weatherDiv.parentElement.removeChild(weatherDiv);
        }
    }

    async function getGifImg(keyword) {
        const gifAnswer = await fetch("http://api.giphy.com/v1/gifs/search?api_key=L37QAU4SVuJI47alepOkCIpZHHhuKyAf&q=" + keyword);
        const json = await gifAnswer.json();
        console.log(json);
        const img = document.createElement("img");
        img.src = json.data[0].images.original.url;
        img.style.height = "300px";
        return img;
    }

    return { createWeatherDiv, toggleTemp, deleteWeatherDiv };
}());

export default dom;
