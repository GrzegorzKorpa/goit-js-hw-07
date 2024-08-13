const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

inputField.addEventListener("input", writeAndErase);

function writeAndErase(event) {
    const formValue = event.currentTarget.value.trim();
    if (formValue !== "") {
        outputField.textContent = formValue;
    } else {
        outputField.textContent = "Anonymous";
    }
}