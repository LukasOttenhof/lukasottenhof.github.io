document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements by their IDs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector("input[type='submit']");

    // Add an event listener to the form submission
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Capture form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        };

        // You can now use formData to display the captured data on your page or send it elsewhere.

        // For example, to display the data in an alert:
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    });
});