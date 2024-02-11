const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const createBtn = document.getElementById('createBtn');
let alertHappened = localStorage.getItem('alertHappened') === 'true' ? true : false;

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const storedPassword = localStorage.getItem(username); // Assuming username is the key
  
  if (storedPassword === password) { // Fixed the comparison
    alert('Login successful!');
    alertHappened = true;
    localStorage.setItem('alertHappened', 'true'); // Update alertHappened in localStorage
    window.location.href = 'my-site.html'; // Redirect to my-site.html upon successful login
  } else {
    alert('Invalid username or password');
  }
});

createBtn.addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose another username.');
    } else {
      localStorage.setItem(username, password);
      alert('Account created successfully!');
    }
  } else {
    alert('Please enter a username and password.');
  }
});
