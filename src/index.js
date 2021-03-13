import './style.css';
import './img/background-test.jpg';
import api from "./api";
import parse from "./jsonInterpreter";
import createWeatherDiv from "./domManipulation";

const newTitle = document.createElement('h1');
const domBody = document.querySelector('body');

domBody.appendChild(newTitle);

async function main(city) {
    const data = await api.getCurrentDayJSON(city);
    const weatherObj = parse(data);
    const weatherNode = createWeatherDiv(weatherObj);

    const bod = document.querySelector("body");
    bod.appendChild(weatherNode);
}

main();

const changeCityButton = document.querySelector("#chooseCityButton");
changeCityButton.addEventListener("click", (event) => {
    const { value } = event.target.parentElement.querySelector("input");
    console.log(value);
    main(value);
});
