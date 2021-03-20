const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Validate email input value
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()))
        showSuccess(input)
    else
        showError(input,'Email is not valid')
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
        else
            showSuccess(item)        
    });
}

// Check length
const checkLength = (input,min,max) => {
    if(input.value.length < min)
        showError(input,`${input.id} must be atleast ${min} characters`)
    else if(input.value.length > max)
        showError(input,`${input.id} must be less than ${max} characters`)
    else
        showSuccess(input);
}


// Check password match
const checkPasswordsMatch = (password,password2) => {
    if(password.value !== password2.value)
        showError(password2,'Passwords do not match');
}



// Event Listeners
// Validate form input values on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkLength(password2,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})