document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Thank you for reaching out to us.');
    // Clear the form
    document.querySelector('form').reset();
});
