
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");
const resetButton = document.getElementById("resetBtn");
const stepInput = document.getElementById("stepInput");

let counter = 0;

incrementButton.addEventListener("click", () => {
    const step = parseInt(stepInput.value) || 1;
    counter += step;
    counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
    const step = parseInt(stepInput.value) || 1;
    if (counter - step >= 0) {
        counter -= step;
        counterElement.textContent = counter;
    }
});

resetButton.addEventListener("click", () => {
    counter = 0;
    counterElement.textContent = counter;
});
