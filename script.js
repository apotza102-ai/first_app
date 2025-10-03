
// Multi-step form logic
document.addEventListener("DOMContentLoaded", () => {
const getStartedBtn = document.getElementById("get-started-btn");
const heroSection = document.getElementById("hero-section");
const automationForm = document.getElementById("automation-form");
const formSteps = document.querySelectorAll(".form-step");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");
const form = document.getElementById("pain-point-form");

const progressBarItems =
    document.querySelectorAll(".progress-bar-item");

let currentStep = 0;

getStartedBtn.addEventListener("click", () => {
    heroSection.classList.add("hidden");
    automationForm.classList.remove("hidden");
    updateFormVisibility();
    updateProgressBar();
});

nextBtn.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
    currentStep++;
    updateFormVisibility();
    updateProgressBar();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
    currentStep--;
    updateFormVisibility();
    updateProgressBar();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get form data
    const formData = {
    painPoint: document.getElementById("pain-point").value,
    businessType: document.getElementById("business-type").value,
    email: document.getElementById("email").value,
    };

    // Simulate saving the data (replace this with a real API call)
    console.log("Saving form data:", formData);

    // Hide form and show success message
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
});

function updateFormVisibility() {
    formSteps.forEach((step, index) => {
    if (index === currentStep) {
        step.classList.remove("hidden");
    } else {
        step.classList.add("hidden");
    }
    });

    // Show/hide navigation buttons
    if (currentStep === 0) {
    prevBtn.classList.add("hidden");
    } else {
    prevBtn.classList.remove("hidden");
    }

    if (currentStep === formSteps.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    // Populate summary in step 3
    document.getElementById("summary-pain-point").textContent =
        document.getElementById("pain-point").value;
    document.getElementById("summary-business-type").textContent =
        document.getElementById("business-type").value;
    document.getElementById("summary-email").textContent =
        document.getElementById("email").value;
    } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
    }
}

function updateProgressBar() {
    progressBarItems.forEach((item, index) => {
    if (index < currentStep) {
        item.classList.add("completed");
        item.classList.remove("active");
    } else if (index === currentStep) {
        item.classList.add("active");
        item.classList.remove("completed");
    } else {
        item.classList.remove("active", "completed");
    }
    });
}
});