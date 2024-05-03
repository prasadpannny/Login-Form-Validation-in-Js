
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var loginUsername = document.getElementById('loginUsername').value.trim();
    var loginPassword = document.getElementById('loginPassword').value.trim();

    // Get stored data from local storage
    
    var storedUsername = localStorage.getItem('regUsername');
    var storedPassword = localStorage.getItem('regPassword');

    // Validate username

    var loginUsernameError = document.getElementById('loginUsernameError');
    if (loginUsername.length === 0) {
        loginUsernameError.textContent = 'Username cannot be empty';
        return;
    } else {
        loginUsernameError.textContent = '';
    }

    // Validate password

    var loginPasswordError = document.getElementById('loginPasswordError');
    if (loginPassword.length === 0) {
        loginPasswordError.textContent = 'Password cannot be empty';
        return;
    } else {
        loginPasswordError.textContent = '';
    }

    console.log('Username:', loginUsername);
    console.log('Password:', loginPassword);

    // Check if entered credentials match stored data
    if (loginUsername === storedUsername && loginPassword === storedPassword) {

    // Redirect to home page after successful login

        alert('Login successful');
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
});
