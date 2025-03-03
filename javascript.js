let firstNb = "";
let secondNb = "";
let firstOp = "";
let secondOp = "";

const btnsNb = document.querySelectorAll(".btn-nb");
const btnsOp = document.querySelectorAll(".btn-operator");
const acBtn = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const para = document.querySelector(".display");

function operate(a, b, op) {
    switch(op) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
    }
};

btnsNb.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (firstOp === ""){
            if(para.textContent === "") {
                para.textContent = btn.value;
            } else if (para.textContent === firstNb) {
                para.textContent = btn.value;
            } else {
                para.textContent += btn.value;
            };
        } else {
            if(para.textContent == firstNb) {
                para.textContent = btn.value;
            } else {
                para.textContent += btn.value;
            };
        };
    });
});

btnsOp.forEach((btn) => {
    btn.addEventListener("click", () => {     
        if (firstOp === "") {
            firstOp = btn.value;
            firstNb = para.textContent;
        } else if (firstOp != "" && secondOp === "") {
            secondOp = btn.value;
            secondNb = "";
        } else if (firstOp != "" && secondOp != "") {
            secondOp = btn.value;
            secondNb = "";
            console.log(firstNb, secondNb, firstOp);
        };
    });
});

equal.addEventListener("click", () => {
    if (secondOp === "") {
        secondNb = para.textContent;
        para.textContent = operate(parseFloat(firstNb), parseFloat(secondNb), firstOp);
        firstNb = para.textContent;
    } else {
        secondNb = para.textContent;
        para.textContent = operate(parseFloat(firstNb), parseFloat(secondNb), secondOp);
        firstNb = para.textContent;
    }
});

acBtn.addEventListener("click", () => {
    firstNb = "";
    secondNb = "";
    firstOp = "";
    secondOp = "";
    para.textContent = "";
});