function add (a, b) {

    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    if (b === 0) {
        return 'Divide by O';
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
}

let num1 = '';
let num2 = '';
let operation = '';

const numButtons = document.querySelectorAll('.number');
const display = document.getElementById('display');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = num1 + button.textContent;
        num1 = parseInt(display.textContent);
    })
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    //Will also need to clear stored signs / variables here.
})

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        num2 = num1;
        operation = button.textContent;
        console.log(num1, operation);
        display.textContent = button.textContent;
        num1 = '';
    })
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    display.textContent = operate(num2, num1, operation);
    num1 = parseInt(display.textContent);
})