// Select elements
const counterDisplay = document.querySelector(".counter-display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Initial count value
let count = 0;

// Function to update counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Increment button
incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Decrement button (Prevents going below zero)
decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});
