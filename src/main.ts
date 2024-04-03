//all necessary DOM variables using query selectors to appropriate classes and or IDs
const numberButtons = document.querySelectorAll(".number")!;
const operatorButtons = document.querySelectorAll(".operator")!;
const display = document.querySelector("#display")!;
const delAll = document.querySelector("#calcButtonDelAll")!;
const del = document.querySelector("#calcButtonDel")!;
const equals = document.querySelector("#calcButtonEquals")!;
const float = document.querySelector("#calcButtonFloat")!;
//variables needed to reset and initiate display value to be used when calculating later on
let currentValue = "0";
const noValue = "0";

console.log(del);
//created the function that will trigger with any button press, and display whatever is inside the html for the user to see what is happening whilst also storing it to the current value function
const buttonClick: any = (event: typeof buttonClick) => {
  if (currentValue == "0") {
    display.innerHTML = event.target.innerText;
    currentValue = display.innerHTML;
  } else {
    display.innerHTML += event.target.innerText;
    currentValue = display.innerHTML;
  }
};

const delAllClicked = () => {
  currentValue = "0";
  return (display.innerHTML = noValue);
};


//added event listeners below for each button type, to be used above in functions as events
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", buttonClick);
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", buttonClick);
});

delAll.addEventListener("click", delAllClicked);
