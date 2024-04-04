//all necessary DOM variables using query selectors to appropriate classes and or IDs
const numberButtons = document.querySelectorAll(".number")!;
const operatorButtons = document.querySelectorAll(".operator")!;
const addButton = document.querySelector("#calcButtonAdd");
const subtractButton = document.querySelector("#calcButtonSubtract");
const multiplyButton = document.querySelector("#calcButtonMultiply");
const divideButton = document.querySelector("#calcButtonDivide");
const indicesButton = document.querySelector("#calcButtonIndices");
const display = document.querySelector("#display")!;
const delAll = document.querySelector("#calcButtonDelAll")!;
const del = document.querySelector("#calcButtonDel")!;
const equals = document.querySelector("#calcButtonEquals")!;
const float = document.querySelector("#calcButtonFloat")!;
//variables needed to reset and initiate display value to be used when calculating later on
let lastOperator: string = "";
let currentOperator: string = "";
let currentValue: number = 0;
let storedValue: number = 0;
let currentIndices: number = 0;
const noValue = 0;

console.log(del);
//created the function that will trigger with any button press, and display whatever is inside the html for the user to see what is happening whilst also storing it to the current value function
const buttonClick: any = (event: typeof buttonClick) => {
  if (currentValue == 0) {
    display.innerHTML = "";
    display.innerHTML += event.target.innerText;
    currentValue = parseFloat(display.innerHTML);
  } else {
    display.innerHTML += event.target.innerText;
    currentValue = parseFloat(display.innerHTML);
  }
};
const equalsClicked = () => {
  if (currentOperator == "+") {
    storedValue = currentValue + storedValue;
    console.log(storedValue);
    currentValue = noValue;
    currentOperator = "";
    display.innerHTML = storedValue.toString();
    console.log(currentValue);
    console.log(storedValue);
  } else if (currentOperator == "-") {
    storedValue = storedValue - currentValue;
    console.log(storedValue);
    currentValue = noValue;
    currentOperator = "";
    display.innerHTML = storedValue.toString();
    console.log(currentValue);
    console.log(storedValue);
  } else if (currentOperator == "x") {
    storedValue = storedValue * currentValue;
    console.log(storedValue);
    currentValue = noValue;
    currentOperator = "";
    display.innerHTML = storedValue.toString();
    console.log(currentValue);
    console.log(storedValue);
  } else if (currentOperator == "/") {
    storedValue = storedValue / currentValue;
    console.log(storedValue);
    currentValue = noValue;
    currentOperator = "";
    display.innerHTML = storedValue.toString();
    console.log(currentValue);
    console.log(storedValue);
  } else if (currentOperator == "^") {
    storedValue = storedValue * (storedValue * currentValue);
    console.log(storedValue);
    currentValue = noValue;
    currentIndices = 0;
    currentOperator = "";
    display.innerHTML = storedValue.toString();
    console.log(currentValue);
    console.log(storedValue);
  } else {
    storedValue = currentValue;
    display.innerHTML = storedValue.toString();
  }
};
const addClicked = () => {
  if (lastOperator != "") {
    return equalsClicked;
  }
  lastOperator = currentOperator;
  currentOperator = "+";
  if (storedValue == 0) {
    storedValue = currentValue;
  }
  currentValue = noValue;
  display.innerHTML = "";
};

const subtractButtonClicked = () => {
  lastOperator = currentOperator;
  currentOperator = "-";
  if (storedValue == 0) {
    storedValue = currentValue;
  }
  currentValue = noValue;
  display.innerHTML = "";
};

const multiplyClicked = () => {
  lastOperator = currentOperator;
  currentOperator = "x";
  if (storedValue == 0) {
    storedValue = currentValue;
  }
  currentValue = noValue;
  display.innerHTML = "";
};

const divideClicked = () => {
  lastOperator = currentOperator;
  currentOperator = "/";
  if (storedValue == 0) {
    storedValue = currentValue;
  }
  currentValue = noValue;
  display.innerHTML = "";
};

const indicesClicked = () => {
  lastOperator = currentOperator;
  currentOperator = "^";
  if (storedValue == 0) {
    storedValue = currentValue;
  }
  currentValue = noValue;
  display.innerHTML = "";
};

const delClicked = () => {
  if (currentValue == 0) {
    display.innerHTML = currentValue.toString();
  } else {
    display.innerHTML = storedValue.toString();
  }
};

const delAllClicked = () => {
  storedValue = noValue;
  currentValue = noValue;
  return (display.innerHTML = noValue.toString());
};

//added event listeners below for each button type, to be used above in functions as events
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", buttonClick);
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", buttonClick);
});

del.addEventListener("click", delClicked);

delAll.addEventListener("click", delAllClicked);

equals.addEventListener("click", equalsClicked);

addButton?.addEventListener("click", addClicked);

subtractButton?.addEventListener("click", subtractButtonClicked);

multiplyButton?.addEventListener("click", multiplyClicked);

divideButton?.addEventListener("click", divideClicked);

indicesButton?.addEventListener("click", indicesClicked);
