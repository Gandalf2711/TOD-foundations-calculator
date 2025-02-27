let operator;
let display = "";
let array;

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

function getOperator(disp) {
    if(disp.includes("+")) {
        operator = "+";
    } else if (disp.includes("-")) {
        operator = "-";
    } else if (disp.includes("*")) {
        operator = "*";
    } else if (disp.includes("/")) {
        operator = "/";
    };
    return operator;
};

function split(arr) {
    return array = display.split(operator);
}

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

const btns = document.querySelectorAll("#btn");
const para = document.querySelector("p");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        display = display + btn.value;
        para.textContent = display;
        return display;
    });
});

const acBtn = document.querySelector(".btn-clear");

acBtn.addEventListener("click", () => {
    display = ""
    para.textContent = "";
});

const equal = document.querySelector(".btn-equal");

equal.addEventListener("click", () => {
    getOperator(display);
    split(display);
    display = operate(parseInt(array[0]), parseInt(array[1]), operator);
    para.textContent = display;
});