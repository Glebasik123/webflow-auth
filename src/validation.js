// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

module.exports = { validateEmail };

function validatePassword(password) {
    return password.length >= 8;
}

