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
        num1 = display.textContent;
        //console.log(num1,'and',num2)
    })
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
})

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (num2 != '') {
            display.textContent = operate(num2, num1, operation);
            //console.log(operate(num1,num2,operation));
            num2 = display.textContent;
            num1 = '';
            operation = button.textContent;
            //console.log(num1, num2, operation);
        } else {
        num2 = num1;
        operation = button.textContent;
        //console.log(num1, num2, operation);
        num1 = '';
        //console.log(num1, num2, operation, 'me');
        }
    })
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    display.textContent = operate(num2, num1, operation);
    num1 = display.textContent;
    //console.log(num2, num1);
})