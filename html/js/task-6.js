const btnCreate = document.querySelector("button[data-create]");
btnCreate.addEventListener("click", () => {
    const inputField = document.querySelector("input");
    const amount = parseInt(inputField.value);
    if (amount >= 1 && amount <= 100) {
        creatBoxes(amount);
    }
    inputField.value = "";
})

const btnDestroy = document.querySelector("button[data-destroy");
btnDestroy.addEventListener("click", destroyBoxes);

const elementBoxes = document.querySelector("div#boxes");

const creatBoxes = (amount) => {
    console.log(amount);
    let markup = "";
    for (let i = 1; i <= amount; i++) {
        markup += `<div id='${i}'></div>`;
        elementBoxes.insertAdjacentHTML("beforeend", markup);

        const box = document.getElementById(`${i}`);
        box.style.width = `${30 + (i - 1) * 10}px`;
        box.style.height = `${30 + (i - 1) * 10}px`;
        const colorHex = getRandomHexColor();
        box.style.backgroundColor = colorHex;      
    }
};

function destroyBoxes() {
    elementBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}