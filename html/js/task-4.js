const form = document.querySelector("form");
form.addEventListener("submit", submitDone);

function submitDone(event) {
    event.preventDefault();
    if (
        event.target.elements.email.value.trim() === "" ||
        event.target.elements.password.value === ""
    ) {
        alert("All form fields must be filled in");
    } else {
        console.log("Submit done!");
        console.log({
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
        });
    }
    form.reset();
}