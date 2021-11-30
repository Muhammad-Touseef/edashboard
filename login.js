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
var hours = 0.006; // to clear the localStorage after 1 hour(if someone want to clear after 8hrs simply change hours=8)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');

if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}
