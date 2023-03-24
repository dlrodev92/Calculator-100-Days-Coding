/*
Make the Textbox alive.
Create the listener for the buttons and make them show up in the box.
*/ 
const textBox = document.querySelector(".calculator__numberbox");
const btns = document.querySelectorAll(".number");
const btnZero = document.querySelector(".zero")


/*
Make the butons number show up their text content in the box.
*/ 
let operationTrigger = false;

btns.forEach(btn => {
  function typeText() {
    if (operationTrigger === true) {
      textBox.value = btn.textContent;
      operationTrigger = false;
    }else{
    textBox.value += btn.textContent;
    }
  }
  btn.addEventListener("click", typeText);
}
);

/*
Create a expecial function for the 0 number
*/ 

function zeroN() {
    if (textBox.value === "" || textBox.value === 0 ) {
        
    }else{
      if (operationTrigger === true) {
        textBox.value = "";
        operationTrigger = false;
      }else{
      textBox.value += btnZero.textContent;
      }
    }
}

btnZero.addEventListener("click", zeroN);

/*
Here, we created the functions of the operators as well as the calculator functionality itself
*/

// we declare all the variable needed.
let n1;
let n2;
let result;
let currentOperation;
const equalBtn = document.querySelector("#equal");
const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multiplyBtn =document.querySelector("#multiply");
const divisionBtn = document.querySelector("#division");
const percentageBtn = document.querySelector("#PC");
const ceBtn = document.querySelector("#CE");
const cBtn = document.querySelector("#C");

// This function will catch the first number we type in the calculator, and we will use it to create the rest of the functions.
function catchNumber() {
    n1 = parseFloat(textBox.value);
    textBox.value = "";
}
// now we create the functions of the different operators
function add() {
  currentOperation = "add";
  catchNumber();
}
function minus(){
  currentOperation = "minus";
  catchNumber();
}
function multiply(){
  currentOperation = "multiply";
  catchNumber();
}

function division(){
  currentOperation = "division";
  catchNumber();
}

function percentage() {
  currentOperation ="percentage";
  catchNumber();
}
// In here we are going to compare the functions and output the result. We will add this function to the result button

function operation(){
  n2 = parseFloat(textBox.value);
if (currentOperation === "add"){
  result = n1 + n2;
}if (currentOperation === "minus"){
  result = n1 - n2;
}
if (currentOperation === "multiply"){
  result = n1 * n2;
}
if (currentOperation === "division"){
  result = n1 / n2;
}
if (currentOperation === "percentage") {
  result = (n1 * n2) / 100;
}
textBox.value = result;
operationTrigger = true;
}

// In here created the functions to delete C,CE

function toDelete(){
  textBox.value = ""
}

function toDeleteLast(n){
  n = textBox.value;
  let newString = n.toString();
  let sl = newString.length -1;
  let cutter = newString.slice(0,sl);
  let finalResult = parseInt(cutter);

  if (isNaN(finalResult)) {
    textBox.value = "";
  }else{
    textBox.value = finalResult;
  }
  
}

cBtn.addEventListener("click", toDeleteLast);
ceBtn.addEventListener("click",toDelete);
equalBtn.addEventListener("click",operation);
addBtn.addEventListener("click",add);
minusBtn.addEventListener("click",minus);
multiplyBtn.addEventListener("click",multiply);
divisionBtn.addEventListener("click",division);
percentageBtn.addEventListener("click",percentage);

