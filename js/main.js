const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const radioButtons = document.querySelector('.radio-buttons-container');

const errorMessageElements = document.querySelectorAll('.error-message');
let errorCount;

form.addEventListener('submit', function(e)
{
    e.preventDefault();

    // Reset error messages
    errorMessageElements.forEach((errorMessage) => {
        errorMessage.textContent = '';
    })

    errorCount = 0;

    // Check if every input is filled correctly
    checkNameInput();
    checkPhoneInput();
    checkEmailInput();
    checkMessageInput();

    if (errorCount === 0)
    {
        // Console log form values as JSON Object
        const jsonNotParsed = `{"name":"${nameInput.value}", "phone":"${phoneInput.value}", "email":"${emailInput.value}", "message":"${messageInput.value}"}`;
        const json = JSON.parse(jsonNotParsed);
        console.log(json);

        // Clear values
        nameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
    
})

function throwError (inputElement, errorMessage)
{
    const errorElement = inputElement.parentElement.children[2];
    errorElement.textContent = errorMessage;
    errorCount++;
}

function checkNameInput ()
{
    if (nameInput.value === '')
    {
        throwError(nameInput, "This field is required.");
        return false;
    } 
}

function checkPhoneInput ()
{
    if (phoneInput.value === '')
    {
        throwError(phoneInput, "This field is required.");
        return false;
    }
    
    const phonePattern = /^[0-9+]*$/;

    if (phonePattern.test(phoneInput.value) === false)
    {
        throwError(phoneInput, "This field accepts only numbers and + symbol.");
        return false;  
    }
}

function checkEmailInput ()
{
    if (emailInput.value === '')
    {
        throwError(emailInput, "This field is required.");
        return false;
    } 

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailPattern.test(emailInput.value) === false)
    {
        throwError(emailInput, "This email format is incorrect.");
        return false;          
    }
}

function checkMessageInput ()
{
    if (messageInput.value === '')
    {
        throwError(messageInput, "This field is required.");
        return false;
    } 
}



