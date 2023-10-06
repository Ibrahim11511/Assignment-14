const email = document.querySelector('.email');
const password = document.querySelector('.password');
const signInBtn = document.querySelector('.sign-in-btn');
window.alert("انا غيرت بس background عشان الابعاد بتاعتها مش مظبوطه عندى ومبيجبش الصوره كلها")

function mailValidtion() {
    if (/^([a-z]|[A-Z])\w{9,}@\w{2,}\.\w{2,}$/.test(email.value)) {
        email.parentElement.querySelector('.mail-valid').style.display = "block";
        email.parentElement.querySelector('.n-valid').style.display = "none";
        email.style.border = "1px solid #00ff00";
    }    else {
        email.parentElement.querySelector('.n-valid').style.display = "block";
        email.parentElement.querySelector('.mail-valid').style.display = "none";
        email.style.border = "1px solid #ff0000";
    }
}

function passwordValidtion() {
    if (/( )/.test(password.value)) {
        password.parentElement.querySelector('.n-valid').style.display = "block";
        password.parentElement.querySelector('.pass-valid').style.display = "none";
        password.style.border = "1px solid #ff0000";
    }    else if (/\w{6,}/.test(password.value)) {
        password.parentElement.querySelector('.pass-valid').style.display = "block";
        password.parentElement.querySelector('.n-valid').style.display = "none";
        password.style.border = "1px solid #00ff00";
    }    else {
        password.parentElement.querySelector('.n-valid').style.display = "block";
        password.parentElement.querySelector('.pass-valid').style.display = "none";
        password.style.border = "1px solid #ff0000";
    }
}

signInBtn.addEventListener("click", mailValidtion);
signInBtn.addEventListener("click", passwordValidtion);