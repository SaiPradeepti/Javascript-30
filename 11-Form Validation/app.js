const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Validate email input value
const isValidEmail = (emailValue) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
}
    

// Show input error message
const showError = (input,message) => {
        const formControl = input.parentElement;
        formControl.classList = 'form-control error';
        let small = input.nextElementSibling;
        small.style.visibility = 'visible';
        small.innerText = message;
}

// Show success outline
const showSuccess = (input) => {
    const formControl = input.parentElement;
        formControl.classList = 'form-control success';
        let small = input.nextElementSibling;
        small.style.visibility = 'hidden';
}

// Check required fields
const checkRequired = (inputArr) => {
    inputArr.forEach((item) => {
        if(item.value.trim() === '')
            showError(item,`Enter ${item.id}`);
        else if(item.id === 'email' && !isValidEmail(item.value))
            showError(item,'Enter valid email')
        else
            showSuccess(item)        
    });
}

// Event Listeners
// Validate form input values on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
})