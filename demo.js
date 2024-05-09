// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact section
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorContainer = document.getElementById('errorContainer');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        setError('Please enter your name');
    }

    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        setError('Please enter a valid email address');
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        isValid = false;
        setError('Please enter a message');
    }

    if (isValid) {
        // Send form data (or perform other actions) if form is valid
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
            contactForm.reset();
        }, 3000);
    }

    function setError(message) {
        errorContainer.innerText = message;
        errorContainer.style.display = 'block';
        setTimeout(function() {
            errorContainer.style.display = 'none';
        }, 3000);
    }

    function isValidEmail(email) {
        // Basic email validation (you can implement more sophisticated validation if needed)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

