document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact form validation (optional)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting immediately

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}












document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('visible');

    // Reset form fields (optional)
    this.reset();

    // Hide success message after 3 seconds (optional)
    setTimeout(() => {
        successMessage.classList.remove('visible');
    }, 3000);
});






const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Apply the observer to each section
sections.forEach(section => {
    observer.observe(section);
});