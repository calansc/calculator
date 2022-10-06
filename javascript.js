let num1 = '';
let num2 = '';
let num3 = '';
let num4 = '';
let operation = '';

function add (a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    if (b == 0) {
        alert('No dividing by 0!')
        return 0;
        //display.textContent = 'stop it';
    } else {
        return a / b;}
};

function operate (a, b, c) {
    if (c === '+') {
       return add(a, b);
    } else if (c === '-') {
        return subtract(a, b);
    } else if (c === '*') {
        return multiply(a, b);
    } else if (c === '/') {
        return divide(a, b);
    }
};

function roundToSix(num) {
    return +(Math.round(num + "e+6")  + "e-6");
};

function checkDecimal() {
    let decimal = ".";
    return num1.includes(decimal);
    // if display === num1 || display === num2 ... may need to change
};

function displayLength() {
    if (display.textContent.length <= 15) {
        return true;
    }
};

function clearFunction() {
    display.textContent = '0';
    num1 = '';
    num2 = '';
    num3 = '';
    operation = '';
};

function numberButtons() {
    if (displayLength() === true && num3 == '') {
        display.textContent = num1 + this.textContent;
        num1 = display.textContent;
    } else if (displayLength() === true) {
        display.textContent = this.textContent;
        num1 = display.textContent;
        num3 = '';
    }
};

function decimalFunction() {
    if (checkDecimal() === false && displayLength() === true) {
        display.textContent = num1 + dotButton.textContent;
        num1 = display.textContent;
    }
};

function percentButton() {
    if (display.textContent >= .0001) {
        display.textContent = roundToSix(num1 / 100);
        num1 = display.textContent;
    }
};

function backSpaceButton() {
    display.textContent = 
    display.textContent.slice(0,display.textContent.length-1);
    num1 = display.textContent;
};

function signChangeButton() {
    display.textContent = num1 * -1;
    num1 = display.textContent;
};

function operatorsFunction() {
    if (num2 != '') {
        display.textContent = roundToSix(operate(num2, num1, operation));
        num2 = display.textContent;
        num1 = '';
        operation = this.textContent;
    } else {
        num2 = num1;
        operation = this.textContent;
        num1 = '';
    }
};

function equalsButton() {
    if (num1 == '' && num2 == '') {
        display.textContent = '0';
    } else if (num1 == '') {
        display.textContent = 'Error';
    } else if (num2 == '' && num3 == '') {
        display.textContent = num1;
    } else if (num3 !== '') { 
        display.textContent = roundToSix(operate(num3, num1, operation));
        num3 = display.textContent;
        num2 = '';
    } else {
        display.textContent = roundToSix(operate(num2, num1, operation));
        num3 = display.textContent;
    }
};

const numButtons = document.querySelectorAll('.number');
const display = document.getElementById('display');
numButtons.forEach((button) => {
    button.addEventListener('click', numberButtons, false);
});

const dotButton = document.querySelector('#decimal');
dotButton.addEventListener('click', decimalFunction, false);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearFunction, false);

// const percent = document.querySelector('#percent');
// percent.addEventListener('click', percentButton, false);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', backSpaceButton, false);

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', signChangeButton, false);

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', operatorsFunction, false);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', equalsButton, false);

window.addEventListener('keydown', function(event) {
    console.log(event.code);
    if (event.code === 'Digit1' || event.code === 'Numpad1') {
        this.document.getElementById('one').click();
    } else if (event.code === 'Digit2' || event.code === 'Numpad2') {
        this.document.getElementById('two').click();
    } else if (event.code === 'Digit3' || event.code === 'Numpad3') {
        this.document.getElementById('three').click();
    } else if (event.code === 'Digit4' || event.code === 'Numpad4') {
        this.document.getElementById('four').click();
    } else if (event.code === 'Digit5' || event.code === 'Numpad5') {
        this.document.getElementById('five').click();
    } else if (event.code === 'Digit6' || event.code === 'Numpad6') {
        this.document.getElementById('six').click();
    } else if (event.code === 'Digit7' || event.code === 'Numpad7') {
        this.document.getElementById('seven').click();
    } else if (event.code === 'Digit8' || event.code === 'Numpad8') {
        this.document.getElementById('eight').click();
    } else if (event.code === 'Digit9' || event.code === 'Numpad9') {
        this.document.getElementById('nine').click();
    } else if (event.code === 'Digit0' || event.code === 'Numpad0') {
        this.document.getElementById('zero').click();
    } else if (event.code === 'Period' || event.code === 'NumpadDecimal') {
        this.document.getElementById('decimal').click();
    } else if (event.code === 'Equal' || event.code === 'NumpadEnter') {
        this.document.getElementById('equals').click();
    } else if (event.code === 'NumpadAdd') {
        this.document.getElementById('add').click();
    } else if (event.code === 'NumpadSubtract') {
        this.document.getElementById('subtract').click();
    } else if (event.code === 'NumpadMultiply') {
        this.document.getElementById('multiply').click();
    } else if (event.code === 'NumpadDivide') {
        this.document.getElementById('divide').click();
    } else if (event.code === 'Delete') {
        this.document.getElementById('clear').click();
    } else if (event.code === 'Backspace') {
        this.document.getElementById('backspace').click();
    }
});

// Backspace button or percent button?