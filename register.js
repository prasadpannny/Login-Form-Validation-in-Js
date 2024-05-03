
// Registration form validation

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var regUsername = document.getElementById('regUsername').value.trim();
    var regPassword = document.getElementById('regPassword').value.trim();
    var regEmail = document.getElementById('regEmail').value.trim();

    // Store data in local storage

    localStorage.setItem('regUsername', regUsername);
    localStorage.setItem('regPassword', regPassword);
    localStorage.setItem('regEmail', regEmail);

    // Navigate to login page
    alert('Registration succesful')
    window.location.href = 'login.html';

    // Validate username

    let regUsernameError = document.getElementById('regUsernameError');
    if (regUsername.length >= 3 && regUsername.length <= 20) {
        regUsernameError.textContent = '';
    } else {
        regUsernameError.textContent = 'Username must be between 3 to 20 characters';
        return;
    }

    // Validate password

    let regPasswordError = document.getElementById('regPasswordError');
    if (regPassword.length >= 8 && regPassword.length <= 12) {
        regPasswordError.textContent = '';
    } else {
        regPasswordError.textContent = 'Password must be between 8 to 12 characters';
        return;
    }

    // Validate email

    let regEmailError = document.getElementById('regEmailError');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
        regEmailError.textContent = '';
    } else {
        regEmailError.textContent = 'Invalid email address';
        return;
    }

    console.log('Username:', regUsername);
    console.log('Password:', regPassword);
    console.log('Email:', regEmail);
});

    // Check local storage on page load

  window.onload = function() {
    var storedUsername = localStorage.getItem('regUsername');
    var storedPassword = localStorage.getItem('regPassword');
    var storedEmail = localStorage.getItem('regEmail');

    // If there is stored data, display it

    console.log('storedUsername =',storedUsername);
    console.log('storedPassword =',storedPassword);
    console.log('storedEmail = ', storedEmail);
};
