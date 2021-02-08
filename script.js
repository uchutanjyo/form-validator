const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false; 
let passwordsMatch = false;

// Validate form
function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
// Style main message for an error
    if(!isValid) {
        message.textContent = 'Pls fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        message.textContent = 'You did a great job.';


    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure pword match ';
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // if form is valid and passwords match
    if (isValid && password1El.value === password2El.value) {
        message.textContent = 'Valid. Perfect. 100%.';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';



    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.url.value,
        password: form.password.value,

    };
    // Do smthng with user data
    console.log(user);

}

// Process form data
function processFormData(e) {
e.preventDefault();
// Validate form
validateForm();
// Submit data if valid
if (isValid && password1El.value === password2El.value) {
storeFormData();
}
}

// Event listener

form.addEventListener('submit', processFormData)