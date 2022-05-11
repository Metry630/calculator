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
    switch(operator){
        case add:
            return add(var1,var2)
        case subtract:
            return subtract(var1,var2)
        case multiply:
            return multiply(var1,var2)
        case divide:
            return divide(var1,var2)
    }
}
let displayVal = ''
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
const text = document.querySelector('#text')

one.addEventListener('click', displayOne);
two.addEventListener('click', displayTwo);
three.addEventListener('click', displayThree);
four.addEventListener('click', displayFour);
five.addEventListener('click', displayFive);
six.addEventListener('click', displaySix);
seven.addEventListener('click', displaySeven);
eight.addEventListener('click', displayEight);
nine.addEventListener('click', displayNine);
zero.addEventListener('click', displayZero);
point.addEventListener('click', displayPoint);

function displayOne(){
    text.textContent = text.textContent + '1'
}
function displayTwo(){
    text.textContent = text.textContent + '2'
}
function displayThree(){
    text.textContent = text.textContent + '3'
}
function displayFour(){
    text.textContent = text.textContent + '4'
}
function displayFive(){
    text.textContent = text.textContent + '5'
}
function displaySix(){
    text.textContent = text.textContent + '6'
}
function displaySeven(){
    text.textContent = text.textContent + '7'
}
function displayEight(){
    text.textContent = text.textContent + '8'
}
function displayNine(){
    text.textContent = text.textContent + '9'
}
function displayZero(){
    if(text.textContent === "0"){
        text.textContent = "0"
    } else{
        text.textContent = text.textContent + '0'
    }
}
function displayPoint(){
    if(text.textContent.includes(".")){
        return
    } else{
        text.textContent = text.textContent + '.'
    }
}