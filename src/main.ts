//all neccesary DOM variables using query selectors to appropriate classes and or IDs
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

console.log(del)