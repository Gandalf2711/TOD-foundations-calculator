let firstNb = "0";
let secondNb = "";
let operator = "";

const btnsNb = document.querySelectorAll(".btn-nb");
const btnsOp = document.querySelectorAll(".btn-operator");
const btnsTrans = document.querySelectorAll(".btn-transform");
const acBtn = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const para = document.querySelector(".display");
const paraOp = document.querySelector(".display-operator");

para.textContent = firstNb;

//Operations
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
            //To prevent division by 0
            if (b == "0" ) {
                return "Nope";
            } else {
                return a / b;
            };
            break;
    }
};

//Round up to 12 decimals
function roundToTen(num) {
    if(!isNaN(num)) {
        return +(Math.round(num + "e+10")  + "e-10");
    } else {
        return num;
    };
};

//Input operands
btnsNb.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator === "") {
            if (para.textContent === "" || para.textContent === "0" || firstNb === "") {
                para.textContent = btn.value;
                //first entry
            } else {
                para.textContent += btn.value;
                //increment the first entry if more than one digit
            };
            firstNb = para.textContent;
        } else {
            firstNb = para.textContent;
            if (para.textContent === firstNb || para.textContent == "Nope") {
                para.textContent = btn.value;
                //second entry
            } else {
                para.textContent += btn.value;
                //increment second entry if more than one digit
            };
            secondNb = para.textContent;
        };
    });
});

//Input operator
btnsOp.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (firstNb === "Nope") {
            firstNb = "0";
        };
        
        if (operator == "") {
            operator = btn.value;
            paraOp.textContent = btn.innerHTML;
        } else {
            if (secondNb !== "") {
                //case where user does not hit the equal button, but new operator
                para.textContent = roundToTen(operate(parseFloat(firstNb), parseFloat(secondNb), operator));
                operator = btn.value;
                paraOp.textContent = btn.innerHTML;
                firstNb = para.textContent;
                secondNb = "";
            } else {
                //case where user hit two operators in succession
                operator = btn.value;
            };
        };
    });
});

//Equal
equal.addEventListener("click", () => {
    if (firstNb == "Nope") {
        firstNb = "0";
    };

    if (secondNb != "") {
        para.textContent = roundToTen(operate(parseFloat(firstNb), parseFloat(secondNb), operator));
        //reset variables so a new calculation is started after pressing equal
        firstNb = "";
        secondNb = "";
        operator = "";
        paraOp.textContent = "";
    } else {
        //prevent error when pressing equal without second operand
        para.textContent = para.textContent;
    };
});

//Square root, positive/Negative, pourcentage
btnsTrans.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(btn.value) {
            case "squareRoot":
                para.textContent = roundToTen(Math.sqrt(para.textContent));
                paraOp.textContent = btn.innerHTML;
                break;
            case "posNeg":
                para.textContent = para.textContent*-1;
                paraOp.textContent = btn.innerHTML;
                break;
            case "pourc":
                para.textContent = para.textContent/100;
                paraOp.textContent = btn.innerHTML;
                break;
        };
    });
});

//Clear
acBtn.addEventListener("click", () => {
    firstNb = "0";
    secondNb = "";
    operator = "";
    secondOp = "";
    para.textContent = firstNb;
    paraOp.textContent = "";
});