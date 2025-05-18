
const typedPin = document.getElementById('typed-pin');
const keypad = document.getElementById('keypad');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-msg');
const errorMsg = document.getElementById('error-msg');

// try left counter
const tryLeft = document.getElementById('try-left');
let attempts = 3;

// keypad button click event

keypad.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('button')) {
        const value = target.innerText;
        if (value === 'C') {
            typedPin.value = '';
        } else if (value === '<') {
            typedPin.value = typedPin.value.slice(0, -1);
        } else {
            typedPin.value += value;
        }
    }
});

// submit button click event

submitBtn.addEventListener('click', function () {
    const pinInput = document.querySelector('.pin-generator input');
    const generatedPin = pinInput.value;
    const enteredPin = typedPin.value;

    if (generatedPin === enteredPin) {
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        tryLeft.innerText = "";
    } else {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        tryLeft.innerText = `${--attempts} try left`;
    }
    if (attempts === 0) {
        submitBtn.disabled = true;
        tryLeft.innerText = "No tryies left. please refresh the page";
    }
});

document.getElementById('pin-generator').addEventListener('click', function () {
    const pinInput = document.querySelector('.pin-generator input');
    const pin = Math.floor(1000 + Math.random() * 9000);
    pinInput.value = pin;
});