let nbOne;
let nbTwo;
let operator;

function add (a, b) {
    return a + b;
};

function substract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate(a, b, op) {
    let result;
    switch(op) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = substract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
};