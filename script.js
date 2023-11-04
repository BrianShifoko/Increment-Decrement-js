const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");

let counter = 0;

incrementButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        counterElement.textContent = counter;
    }
});