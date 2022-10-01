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

function roundToFive(num) {
    return +(Math.round(num + "e+5")  + "e-5");
}

function checkDot() {
    let displayContent = display.textContent.length;
    //console.log(displayContent);
    let i = 0;
    while (i < displayContent) {
        console.log(i, display.textContent.length);
        i++;
    }
}


let num1 = '';
let num2 = '';
let operation = '';
//let numStore = '';

const numButtons = document.querySelectorAll('.number');
const display = document.getElementById('display');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = num1 + button.textContent;
        num1 = display.textContent;
    })
})

const dotButton = document.querySelector('#point');
dotButton.addEventListener('click', () => {
    display.textContent = num1 + button.textContent;
    num1 = display.textContent;
});

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
            num2 = display.textContent;
            num1 = '';
            operation = button.textContent;
        } else {
        num2 = num1;
        operation = button.textContent;
        num1 = '';
        }
    })
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
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
})




//Limit display character limit to not overflow 'view' window.
//18 char limit. Round answer as needed. 
// ----Check length of string before adding digits
//
//After equal is pressed, and then a new number is pressed, it adds onto
//the last displayed number
//
//Handle divide by 0
//display poptart cat?
//
//Don't let more than one dot into the display.
//Separate dot button from numbers and have it check for existence of a 
//dot in display?