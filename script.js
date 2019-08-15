/* 
  Script that runs the calculator. We register callbacks for buttons based on 
  their IDs and/or classes, and use the eval() function hand in hand with DOM
  element updates to dislay the computed value
*/

// Get references to DOM elements 
let displayScreen = document.getElementById("display-value");

let decButton = document.getElementById("decimal");
let clrButton = document.getElementById("clear");
console.log(decButton);
let backSpaceButton = document.getElementById("backspace");

let zeroButton = document.getElementById("zero");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");

let numberButtons = document.getElementsByClassName("number");
let operatorButtons = document.getElementsByClassName("operator");

/* The following statements generated an error: it turns out using 
   forEach hacks with nodeLists isn't such a good idea after all
   https://ultimatecourses.com/blog/ditch-the-array-foreach-call-nodelist-hack    

   numberButtons.forEach(button => button.addEventListener("click", updateDisplay, false)); 
   operatorButtons.forEach(button => button.addEventListener("click", operate, false));
*/
for (let i=0; i<numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", updateDisplay, false);
}
for (let j=0; j<operatorButtons.length; j++) {
    operatorButtons[j].addEventListener("click", operate, false);
}

let displayValue = '0';
let intermediate;
let stringEvalAcc = [];

function updateDisplay(clicker) {
    let clicked = clicker.target.innerText;
    if (displayValue === '0') {
        displayValue= '';
    }
    displayValue += clicked;
    displayScreen.innerText = displayValue;
}

function operate(clicker) {
    let op = clicker.target.innerText;
    console.log(op);
    switch (op) {
        /* Operators */
        case '+':
            intermediate = displayValue;
            displayValue = '0';
            displayScreen.innerText = displayValue;
            stringEvalAcc.push(intermediate);
            stringEvalAcc.push(op);
            break;
        case '-':
            intermediate = displayValue;
            displayValue = '0';
            displayScreen.innerText = displayValue;
            stringEvalAcc.push(intermediate);
            stringEvalAcc.push(op);
            break;
        case 'x':
            intermediate = displayValue;
            displayValue = '0';
            displayScreen.innerText = displayValue;
            stringEvalAcc.push(intermediate);
            stringEvalAcc.push('*');
            break;
        case '÷':
            intermediate = displayValue;
            displayValue = '0';
            displayScreen.innerText = displayValue;
            stringEvalAcc.push(intermediate);
            stringEvalAcc.push('/');
            break;
        /* Evaluation */
        case '=':
            stringEvalAcc.push(displayValue);
            console.log(stringEvalAcc.join(' '));
            let result = eval(stringEvalAcc.join(' '));
            displayValue = `${result}`;
            displayScreen.innerText = displayValue;
            stringEvalAcc = [];
            break;

        default:
            break;
    }
}
/*
clrButton.onclick = () => {
    displayValue = '0';
    displayScreen.innerText = displayValue;
    intermediate = undefined;
    stringEvalAcc = [];
}

backSpaceButton.onclick = () => {
    let length = displayValue.length;
    displayValue = displayValue.slice(0, length-1);
    if (displayValue == '') { 
      displayValue = '0';
    }
    displayScreen.innerText = displayValue;
}
*/
decButton.onclick = () => {
    if (!displayValue.includes('.')) {
        displayValue == '.';
        displayScreen.innerText = displayValue;
    }
}