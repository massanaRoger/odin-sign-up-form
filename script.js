const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const noMatch = document.querySelector('.no-match');
let prevCorrectPassword = false;

password.addEventListener('keyup', checkPasswordMatch);
confirmPassword.addEventListener('keyup', checkPasswordMatch);

function checkPasswordMatch() {
    debugger
    if (password.value !== confirmPassword.value && prevCorrectPassword) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        noMatch.hidden = false;
        prevCorrectPassword = false;
    } else if (password.value === confirmPassword.value) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        prevCorrectPassword = true;
        noMatch.hidden = true;
    }
}