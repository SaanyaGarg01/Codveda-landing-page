document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const successMessage = document.querySelector(".success-message");
    const strengthBar = document.querySelector(".strength-bar");

    // Real-time validation function
    function validateInput(input, message, regex = null) {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorMessage.textContent = message;
            errorMessage.style.display = "block";
            input.style.borderColor = "red";
            return false;
        } else if (regex && !regex.test(input.value.trim())) {
            errorMessage.textContent = `Invalid ${input.getAttribute("id")}`;
            errorMessage.style.display = "block";
            input.style.borderColor = "red";
            return false;
        } else {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
            input.style.borderColor = "#4CAF50";
            return true;
        }
    }

    // Event Listeners for real-time validation
    nameInput.addEventListener("blur", () => validateInput(nameInput, "Name is required"));
    emailInput.addEventListener("blur", () => validateInput(emailInput, "Valid email required", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));
    phoneInput.addEventListener("blur", () => validateInput(phoneInput, "Valid phone number required", /^[0-9]{10}$/));

    // Password Strength Checker
    passwordInput.addEventListener("input", () => {
        const value = passwordInput.value;
        if (value.length < 6) {
            strengthBar.style.width = "30%";
            strengthBar.style.background = "red";
        } else if (value.length < 8) {
            strengthBar.style.width = "60%";
            strengthBar.style.background = "orange";
        } else {
            strengthBar.style.width = "100%";
            strengthBar.style.background = "green";
        }
        validateInput(passwordInput, "Password is required");
    });

    // Form Submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const isValidName = validateInput(nameInput, "Name is required");
        const isValidEmail = validateInput(emailInput, "Valid email required", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const isValidPhone = validateInput(phoneInput, "Valid phone number required", /^[0-9]{10}$/);
        const isValidPassword = validateInput(passwordInput, "Password is required");

        if (isValidName && isValidEmail && isValidPhone && isValidPassword) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = "block";
            form.reset();
            strengthBar.style.width = "0"; // Reset password strength bar
        }
    });
});
