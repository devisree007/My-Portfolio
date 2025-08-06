// script.js

document.getElementById('messageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple confirmation popup
  alert('Thanks for your message! This form is not connected to a backend.');

  // Optionally clear form fields
  this.reset();
});
