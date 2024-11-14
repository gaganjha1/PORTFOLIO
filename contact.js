

// Form validation function
function validateForm() {
    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any field is empty
    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return false;  // Prevent form submission if any field is empty
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;  // Prevent form submission if the email is not valid
    }

    // If all validations pass
    return true;
}

// Handle form submission with success/error messages
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate form
    if (validateForm()) {
        // If the form is valid, submit it (you can use fetch or axios for AJAX requests)
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Thank you for your message! I will get back to you soon.");
                form.reset();  // Clear form fields after successful submission
            } else {
                alert("Something went wrong, please try again later.");
            }
        })
        .catch(error => {
            alert("There was an error with your submission. Please try again.");
        });
    }
});


// Function to toggle visibility of social media links
function toggleSocialLinks() {
    const socialMedia = document.querySelector('.social-media');
    const toggleButton = document.querySelector('#toggle-social-btn');

    toggleButton.addEventListener('click', () => {
        socialMedia.classList.toggle('d-none');  // Adds or removes 'd-none' (hidden class) to the social media container
    });
}

// Initialize toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    toggleSocialLinks();  // Setup the toggle behavior
});


