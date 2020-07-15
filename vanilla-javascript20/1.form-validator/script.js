// need form and each of input
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error messages
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

//show success input outline messages
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not Valid');
    }
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }
}

//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at leas ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6,25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

    // This code isn't clean, and make messy on your code when scale your code or the field or unscalable code
    // if(username.value === ''){
    //     showError(username, 'Username is requires');
    // }else{
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, 'Email is required');
    // }else if(!isValidEmail(email.value)){
    //     showError(email, 'Email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, 'Password is required');
    // }else{
    //     showSuccess(password);
    // }

    // if(password2.value === ''){
    //     showError(password2, 'Please enter your password again');
    // }else{
    //     showSuccess(password2);
    // }
});