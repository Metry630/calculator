let lastPressed;
function add(x,y){
    return x+y
}
function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}
function operate(var1,var2,operator){
    var1 = Number(var1);
    var2 = Number(var2);
   switch(operator){
        case 'adds':
            return add(var1,var2)
        case 'subtracts':
            return subtract(var1,var2)
        case 'multiplies':
            return multiply(var1,var2)
        case 'divides':
            if(var2 !== 0){
                return divide(var1,var2)  
            }else{
                return "Stop trying to find bugs"
            }
    }
}

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const text = document.querySelector('#text');
const equals = document.querySelector("#equals");
const dividing = document.querySelector("#divide");
const multiplying = document.querySelector("#multiply");
const subtracting = document.querySelector("#subtract");
const adding = document.querySelector("#add");
const deleter = document.querySelector("#delete");
const clearer = document.querySelector('#clear');
text.textContent.maxLength = 13;

clearer.addEventListener('click', clear)
deleter.addEventListener('click', deleting)

one.addEventListener('click', () => {
    displayOne();
});
two.addEventListener('click', () => {
    displayTwo();
});
three.addEventListener('click', () => {
    displayThree();
});
four.addEventListener('click', () => {
    displayFour();
});
five.addEventListener('click', () => {
    displayFive();
});
six.addEventListener('click', () => {
    displaySix();
});
seven.addEventListener('click', () => {
    displaySeven();
});
eight.addEventListener('click', () => {
    displayEight();
});
nine.addEventListener('click', () => {
    displayNine();
});
zero.addEventListener('click', () => {
    displayZero();
});
point.addEventListener('click', displayPoint);

function displayOne(){
    if(lastPressed === "operator"){
        text.textContent = "1";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '1'
        lastPressed = 'num';
    }
}
function displayTwo(){
    if(lastPressed === "operator"){
        text.textContent = "2";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '2'
        lastPressed = 'num';
    }
}
function displayThree(){
    if(lastPressed === "operator"){
        text.textContent = "3";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '3'
        lastPressed = 'num';
    }
}
function displayFour(){
    if(lastPressed === "operator"){
        text.textContent = "4";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '4'
        lastPressed = 'num';
    }
}
function displayFive(){
    if(lastPressed === "operator"){
        text.textContent = "5";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '5'
        lastPressed = 'num';
    }
}
function displaySix(){
    if(lastPressed === "operator"){
        text.textContent = "6";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '6'
        lastPressed = 'num';
    }
}
function displaySeven(){
    if(lastPressed === "operator"){
        text.textContent = "7";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '7'
        lastPressed = 'num';
    }
}
function displayEight(){
   if(lastPressed === "operator"){
       text.textContent = "8";
       lastPressed = 'num';
   }else{
    text.textContent = text.textContent + '8'
    lastPressed = 'num';
   }
}
function displayNine(){
    if(lastPressed === "operator"){
        text.textContent = "9";
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + '9'
        lastPressed = 'num';
    }
}
function displayZero(){
    if(lastPressed === "operator"){
        text.textContent = "0";
        lastPressed = 'num';
    }else if(text.textContent === "0"){
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + "0";
        lastPressed = 'num';
    }
}
function displayPoint(){
    if(lastPressed === "operator"){
        text.textContent = "0.";
        lastPressed = 'num';
    }else if(text.textContent.includes('.')){
        lastPressed = 'num';
    }else{
        text.textContent = text.textContent + ".";
        lastPressed = 'num';
    }
}
function clear(){
    lastPressed = "";
    values = [];
    currentOperator = "";
    text.textContent = ""
}
function deleting(){
    let deleted = text.textContent.slice(0,-1);
    text.textContent = deleted
}


equals.addEventListener('click', displayEquals);
dividing.addEventListener('click', ()=>{
    displayDivide();
});
multiplying.addEventListener('click', ()=>{
    displayMultiply();
});
subtracting.addEventListener('click', ()=>{
    displaySubtract();
});
adding.addEventListener('click', ()=>{
    displayAdd();
});
let values = [];
let currentOperator = "";
function displayDivide(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "divides";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "divides";
            lastPressed = "operator";
        }
    }
}
function displayMultiply(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "multiplies";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "multiplies";
            lastPressed = "operator";
        }
    }
}
function displaySubtract(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "subtracts";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "subtracts";
            lastPressed = "operator";
        }
    }
}
function displayAdd(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "adds";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.]/g, ''));
            currentOperator = "adds";
            lastPressed = "operator";
        }
    }
}
function displayEquals(){
    if(lastPressed !== "operator"){
        if(currentOperator !== ""){
            values.push(text.textContent.replace(/[^0-9.]/g, ''))
            console.log(values)
            let divResult = operate(values[values.length - 2], values[values.length - 1], currentOperator)
            text.textContent = `${divResult}`;
            currentOperator = "";
            lastPressed = "num";
        }
    }
}