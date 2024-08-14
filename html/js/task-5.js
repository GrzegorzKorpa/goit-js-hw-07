function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector("button.change-color");
const bodyElem = document.querySelector("body");
const colorNameDisplay = document.querySelector("span.color");

function changeColor() {
    const colorValue = getRandomHexColor();
    colorNameDisplay.textContent = colorValue;
    bodyElem.style.backgroundColor = colorValue;
}

btnChange.addEventListener("click", changeColor);