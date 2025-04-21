// Login form handler (only if on login page)
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        if (username && password) {
          alert(`Welcome, ${username}!`);
          // Optionally redirect to homepage
          window.location.href = "index.html";
        } else {
          alert("Please fill in both fields.");
        }
      });
    }
  });
  