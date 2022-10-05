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

function roundToFive(num) {
    return +(Math.round(num + "e+5")  + "e-5");
};

function checkDot() {
    let dot = ".";
    return num1.includes(dot);
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
};

function numberButtons() {
    if (displayLength() === true) {
        display.textContent = num1 + this.textContent;
        num1 = display.textContent;
        }
};

function dotButtonFunction() {
    if (checkDot() === false && displayLength() === true) {
        display.textContent = num1 + dotButton.textContent;
        num1 = display.textContent;
    }
};

function percentButton() {
    display.textContent = num1 / 100;
    num1 = display.textContent;
};

function plusMinusButton() {
    display.textContent = num1 * -1;
    num1 = display.textContent;
};

function operatorsFunction() {
    if (num2 != '') {
        display.textContent = roundToFive(operate(num2, num1, operation));
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
    } else if (num2 == '') {
        display.textContent = num1;
    } else {
        display.textContent = roundToFive(operate(num2, num1, operation));
        num1 = display.textContent;
        num2 = '';
    }
};



let num1 = '';
let num2 = '';
let operation = '';

const numButtons = document.querySelectorAll('.number');
const display = document.getElementById('display');
numButtons.forEach((button) => {
    button.addEventListener('click', numberButtons, false);
    //button.addEventListener('touchstart', numberButtons, false);
});

const dotButton = document.querySelector('#point');
dotButton.addEventListener('click', dotButtonFunction, false);
//dotButton.addEventListener('touchstart', dotButtonFunction, false);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearFunction, false);
//clear.addEventListener('touchstart', clearFunction, false);

const percent = document.querySelector('#percent');
percent.addEventListener('click', percentButton, false);
//percent.addEventListener('touchstart', percentButton, false);

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', plusMinusButton, false);
//plusMinus.addEventListener('touchstart', plusMinusButton, false);

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', operatorsFunction, false);
    //button.addEventListener('touchstart', operatorsFunction, false);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', equalsButton, false);
//equals.addEventListener('touchstart', equalsButton, false);



//After equal is pressed, and then a new number is pressed, it adds onto
//the last displayed number