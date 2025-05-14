const users = []; // Array to store user accounts

function showCreateForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('create-account-form').style.display = 'none';
}

function handleRegistration(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('create-username').value;
    const password = document.getElementById('create-password').value;
  const registrationError = document.getElementById('registration-error')

    if (!username || !password) {
        registrationError.textContent="Please enter both username and password"
        return;
    }

    if (users.some(user => user.username === username)) {
        registrationError.textContent="Username already exists"
        return;
    }

    const newUser = { username, password };
    users.push(newUser);
    console.log('New user registered:', newUser);

    //clear the form
    document.getElementById('create-username').value = '';
    document.getElementById('create-password').value = '';
    showLoginForm(); // Switch back to the login form
}



function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');


    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('User logged in:', username);
        alert('Login successful!'); // Replace with actual login logic (e.g., redirect)
        //clear form
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';

    } else {
        loginError.textContent = 'Invalid username or password.';
    }
}

// Attach event listeners to the forms.  Do this *after* the functions are defined.
document.getElementById('create-account-form').addEventListener('submit', handleRegistration);
document.getElementById('login-form').addEventListener('submit', handleLogin);
