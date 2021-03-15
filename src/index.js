import './style.css';
import './img/background-test.jpg';
import api from "./api";
import dom from "./domManipulation";

let config = {
    degree: "celsius",
};

const newTitle = document.createElement('h1');
const domBody = document.querySelector('body');

const tempButtons = document.querySelectorAll(".tempButtons");
tempButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const id = event.target.getAttribute("data-id");
        config.degree = id;
        dom.toggleTemp(id);
    })
})

domBody.appendChild(newTitle);

async function main(city) {
    const data = await api.getCurrentDayJSON(city);
    const weatherNode = dom.createWeatherDiv(data);

    if(!weatherNode) {
        return;
    }

    const bod = document.querySelector("body");
    bod.appendChild(weatherNode);
    console.log("1");
    config.degree = dom.toggleTemp(config.degree);

    const temperatureFahrenheit = document.querySelector("#setFahrenheit");
    temperatureFahrenheit.checked = false;

    const temperatureCelsius = document.querySelector("#setCelsius");
    temperatureCelsius.checked = true;
}

main();

const changeCityButton = document.querySelector("#chooseCityButton");
changeCityButton.addEventListener("click", (event) => {
    dom.deleteWeatherDiv();
    const { value } = event.target.parentElement.querySelector("input");
    main(value).then(() => dom.toggleTemp(config.degree));
    
});

