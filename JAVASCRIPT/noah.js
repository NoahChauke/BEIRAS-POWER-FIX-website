// Function to set the current year in the "currentYear" span
function getCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
}
window.onload = getCurrentYear;

// Function to validate the form
function validateForm() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");

    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const subjectValue = subjectField.value.trim();
    const messageValue = messageField.value.trim();
   
    // Validate name field
    if (nameValue === "") {
        alert("Name is required");
        return false;
    }

    // Validate email field
    if (emailValue === "") {
        alert("Email is required");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate subject field
    if (subjectValue === "") {
        alert("Subject is required");
        return false;
    }

    // If validation passes, proceed to send the email
    sendEmail(nameValue, emailValue, subjectValue, messageValue);
    return false;  // Prevent form from actually submitting
}

// Function to dynamically send the email using the form data
function sendEmail(name, email, subject, message) {
    const mailtoLink = `mailto:NoahChauke@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;  // This will open the default email client
    
}
