//This calculator is my first project in javascript (10/9-10/10/22). It attempts to mimic the standard OSX calculator (in non-scientific mode). It was inspired by FrontEndMasters intro to web development course with Brian Holt. 

//The calculator can basically be seen as doing logic on an ordered list on characters. 

//There is some back-end logic (which determines when and how to do a 'calculation') and front-end logic (which controls the display).

//Back-end: The required conditions to 'calculate' are fufilled when the final characters in the input string have the following pattern: (number,operator, number,operator || equals). Without this information, the calculator doesn't know how to interpret equals or an operator. (number,operator,number) 'primes' the calculator to calculate. Operator or equals, both trigger a calculation.

//Front-end is fairly straightforward. It has some logic to prevent leading zeros or multiple decimal points. It concatenates the string, unless the previous input was operator or equals, in which case it clears the display and starts fresh. 


let output = document.querySelector(".output"); //calculator display/window text 
const calc = {
    firstOperand: "0",
    primedToCalculate: false,
    lastBinaryOperator: "",
    number_array: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
    binaryOperatorArray: ["*", "/", "-", "+",],
    last_input: "0",
}

//Display Manager 
document.addEventListener("click", function (event) {
    currentInput = event.target.innerText;
    //current previous inputs both characters --> concat or replace
    if (calc.number_array.includes(currentInput)) {
        if (calc.number_array.includes(calc.last_input)) {
            //deal with leading zeros
            if (currentInput != "." && output.textContent === "0") {
                output.textContent = currentInput
            } // preclude multiple decimal points per strings 
            else if (!(currentInput === "." && output.textContent.includes("."))) {
                output.textContent += currentInput;
            }
        }
        //the current input is a number but the last input was an operator? --> new operand
        else if (calc.binaryOperatorArray.includes(calc.last_input) || calc.last_input === "=") {
            if (currentInput === "." || currentInput === "0") { output.textContent = "0."; }
            else { output.textContent = currentInput; } //new currentInput will replace the display 
        }
        if (output.textContent != "0") { AC.textContent = "C" }
        calc.last_input = currentInput;

    }
});

//Calculator Engine 
document.addEventListener("click", function (event) {
    mathOperator = event.target.innerText; //let's do math 
    if (calc.binaryOperatorArray.includes(mathOperator)) {
        if (calc.primedToCalculate === true) {
            output.textContent = compute(calc.lastBinaryOperator, Number(calc.firstOperand), Number(output.textContent))
        }
        calc.firstOperand = output.textContent;
        calc.lastBinaryOperator = mathOperator;
        calc.last_input = mathOperator;
        calc.primedToCalculate = true;

    }
});

let equals = document.querySelector(".equals");
equals.addEventListener("click", function () {
    if (calc.primedToCalculate = true) {
        output.textContent = compute(calc.lastBinaryOperator, Number(calc.firstOperand), Number(output.textContent));
        calc.firstOperand = output.textContent;
        calc.primedToCalculate = false;
        calc.last_input = "=";
    }
});

let AC = document.querySelector(".AC"); // clear functionality 
AC.addEventListener("click", function () {
    resetStates()
    AC.textContent = "AC";
});

let plus_minus = document.querySelector(".plus-minus");
plus_minus.addEventListener("click", function () {
    output.textContent = -1 * Number(output.textContent);
});

let ampersand = document.querySelector(".ampersand");
ampersand.addEventListener("click", function () {
    output.textContent = Number(output.textContent) / 100;
});

function resetStates() {
    output.textContent = 0;
    calc.firstOperand = ""
    calc.primedToCalculate = false
    calc.lastBinaryOperator = ""
    calc.last_input = "0"
}

function compute(operation, firstOperand, secondOperand) { //could I apply Number in the parameters? can I strip the inputs so that they function without these if statements? 

    if (operation === "-") {
        result = firstOperand - secondOperand;
    }
    else if (operation === "+") {
        result = secondOperand + firstOperand;
    }
    else if (operation === "*") {
        result = secondOperand * firstOperand;
    }
    else if (operation === "/") {
        result = firstOperand / secondOperand;
    }
    return parseFloat(result.toFixed(5))
}
