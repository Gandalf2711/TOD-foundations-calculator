let firstNb = "0";
let secondNb = "";
let operator = "";

const btnsNb = document.querySelectorAll(".btn-nb");
const btnsOp = document.querySelectorAll(".btn-operator");
const btnsTrans = document.querySelectorAll(".btn-transform");
const acBtn = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const para = document.querySelector(".display");

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
function roundToTwelve(num) {
    if(!isNaN(num)) {
        return +(Math.round(num + "e+12")  + "e-12");
    } else {
        return num;
    };
};

//Input operands
btnsNb.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator === "") {
            if (para.textContent === "" || para.textContent === "0") {
                para.textContent = btn.value;
                //first entry
            } else {
                para.textContent += btn.value;
                //increment the first entry if more than one digit
            };
            firstNb = para.textContent;
        } else {
            if (para.textContent === firstNb) {
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
        if (operator == "") {
            operator = btn.value;
        } else {
            if (secondNb !== "") {
                //case where user does not hit the equal button, but new operator
                console.log(firstNb, secondNb, operator);
                para.textContent = roundToTwelve(operate(parseFloat(firstNb), parseFloat(secondNb), operator));
                operator = btn.value;
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
    if (secondNb != "") {
        para.textContent = roundToTwelve(operate(parseFloat(firstNb), parseFloat(secondNb), operator));
        firstNb = para.textContent;
        secondNb = "";
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
                para.textContent = roundToTwelve(Math.sqrt(para.textContent));
                break;
            case "posNeg":
                para.textContent = para.textContent*-1;
                break;
            case "pourc":
                para.textContent = para.textContent/100;
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
});