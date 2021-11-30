const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Admin" && password === "Evtl123") {
    	localStorage.setItem("Admin", "Evtl123");
        alert("You have successfully logged in.");
        location.assign("index.html");
        // location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

