const form = document.querySelector('form');
const name = document.querySelector('input[name=name]');
const email = document.querySelector('input[name=email]');
const phone = document.querySelector('input[name=phone]');
const message = document.querySelector('textarea[name=message]');

if(name.classList.contains('border-green-500')) {
    console.log("true")
} else {
    console.log("false")
}

function showError(input, message) {
    input.classList.remove("border-primary")
    input.classList.remove("border-green-500")
    input.classList.add("border-red-500")
    const small = input.nextElementSibling;
    small.classList.remove("hidden");
    small.innerText = message;
}

function showSuccess(input) {
    const small = input.nextElementSibling;
    input.classList.remove("border-primary")
    input.classList.add("border-green-500")
    small.classList.add("hidden");

}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${input.placeholder} is required.`);
        } else {
            showSuccess(input);
        }
    });
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid.');
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([name, email, phone, message]);
    checkEmail(email);

    if (name.classList.contains('border-green-500') &&
        email.classList.contains('border-green-500') &&
        phone.classList.contains('border-green-500') &&
        message.classList.contains('border-green-500')) {
        form.submit();
    }
});



