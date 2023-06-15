const form = document.querySelector('#form')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmationInput = document.querySelector('#password-confirmation')
const termsInput = document.querySelector('#terms')
const formGroup = document.querySelectorAll('.form-group')
const errorsContainer = document.querySelector('.errors')
const errorsList = document.querySelector('.errors-list')

form.addEventListener('submit', e => {
const errorMessages = [];
clearErrors()
if (usernameInput.value.length < 6) {
    errorMessages.push('Please enter a Username that is at least 6 characters long.')
}

if (passwordInput.value.length < 10) {
    errorMessages.push('Please enter a password that is at least 10 characters long.')
}

if (passwordInput.value !== passwordConfirmationInput.value) {
    errorMessages.push('Please make sure that your password and password confirmation match.')
}

if (!termsInput.checked) {
    errorMessages.push('Please read the terms and click the checkbox to continue.')
}

if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
}
})

function clearErrors() {
errorsList.innerHTML = ''
}

function showErrors(errorMessages) {
    errorMessages.forEach(errorMessage => {
        const li = document.createElement('li')
        li.innerText = errorMessage
        errorsList.appendChild(li)
    })
    errorsContainer.classList.add('show')
}