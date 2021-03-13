export default function createWeatherDiv(weatherObj) {
    const nodeList = Object.keys(weatherObj).map((property) => {
        const newNode = document.createElement("div");
        newNode.textContent = weatherObj[property];
        newNode.id = property;
        return newNode;
    });

    const container = document.createElement("div");
    container.classList.add("weatherNode");

    container.append(...nodeList);

    return container;
}
