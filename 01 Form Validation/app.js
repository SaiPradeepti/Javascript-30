const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const isValidEmail () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test();
}
    


const showError = (input,message) => {
        const formControl = input.parentElement;
        formControl.classList = 'form-control error';
        let small = input.nextElementSibling;
        small.style.visibility = 'visible';
        small.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
        formControl.classList = 'form-control success';
        let small = input.nextElementSibling;
        small.style.visibility = 'hidden';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    username.value === '' ? showError(username,'Enter username'):showSuccess(username);
    email.value === '' ? showError(email,'Enter email'):showSuccess(email);
    password.value === '' ? showError(password,'Enter password'):showSuccess(password);
    password2.value === '' ? showError(password2,'Enter password again'):showSuccess(password2);
})