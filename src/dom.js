const dom = (function dom() {
    function createWeatherDiv(weatherObj) {
        if(!weatherObj) {
            return "";
        }
        const displayData = {};
        displayData.cityName = weatherObj.name;
        displayData.temperature = weatherObj.main.temp;
        displayData.temperatureCelsius = `${Math.round(displayData.temperature - 273.13)} °C`;
        displayData.temperatureFahrenheit = `${Math.round((((displayData.temperature - 273) * 9) / 5) + 32)} °F`;
        displayData.main = weatherObj.weather[0].main;
        displayData.description = weatherObj.weather[0].description;

        const nodeList = Object.keys(displayData).map((property) => {
            const newNode = document.createElement("div");
            newNode.classList.add("data");
            newNode.textContent = displayData[property];
            newNode.id = property;
            return newNode;
        });

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;

        nodeList.push(weatherIcon);

        getGifImg(displayData.description)
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
