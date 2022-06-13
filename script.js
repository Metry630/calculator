let lastPressed;
let values = [];
let currentOperator = "";
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
            return round(add(var1,var2))
        case 'subtracts':
            return round(subtract(var1,var2))
        case 'multiplies':
            return round(multiply(var1,var2))
        case 'divides':
            if(var2 !== 0){
                return round(divide(var1,var2))
            }else{
                return "Stop trying to find bugs"
            }
    }
}
function round(num){
    return Math.round(num*1000)/1000
}
const point = document.querySelector('#point');
const text = document.querySelector('#text');
const equals = document.querySelector("#equals");
const dividing = document.querySelector("#divide");
const multiplying = document.querySelector("#multiply");
const subtracting = document.querySelector("#subtract");
const adding = document.querySelector("#add");
const deleter = document.querySelector("#delete");
const clearer = document.querySelector('#clear');
clear()
window.addEventListener('keydown', keyboardInput)
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
clearer.addEventListener('click', clear)
deleter.addEventListener('click', deleting)
document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', displayClick)
})
point.addEventListener('click', displayPoint)
function keyboardInput(e) {
    if (e.key === '0') displayPress('0');
    if (e.key === '1') displayPress('1')
    if (e.key === '2') displayPress('2')
    if (e.key === '3') displayPress('3')
    if (e.key === '4') displayPress('4')
    if (e.key === '5') displayPress('5')
    if (e.key === '6') displayPress('6')
    if (e.key === '7') displayPress('7')
    if (e.key === '8') displayPress('8')
    if (e.key === '9') displayPress('9')
    if (e.key === '.') displayPoint()
    if (e.key === '=') displayEquals()
    if (e.key === 'Enter') displayEquals()
    if (e.key === 'Backspace') deleting()
    if (e.key === 'Escape') clear()
    if (e.key === '+') displayAdd()
    if(e.key === '-') displaySubtract()
    if(e.key === '/') displayDivide()
    if(e.key === "*") displayMultiply()
}
function displayClick(){
    if(lastPressed === "operator"){
        text.textContent = this.innerText;
        lastPressed = 'num';
    }else if(text.textContent.length <= 13){
        text.textContent = text.textContent + this.innerText;
        lastPressed = 'num';
    }
}
function displayPress(x){
    if(lastPressed === "operator"){
        text.textContent = x.toString();
        lastPressed = 'num';
    }else if(text.textContent.length <= 13){
        text.textContent = text.textContent + x.toString();
        lastPressed = 'num';
    }
}
function displayPoint(){
    if(lastPressed === "operator"){
        text.textContent = "0.";
        lastPressed = 'num';
    }else if(text.textContent.includes('.') === false){
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
function displayDivide(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "divides";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "divides";
            lastPressed = "operator";
        }
    }
}
function displayMultiply(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "multiplies";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "multiplies";
            lastPressed = "operator";
        }
    }
}
function displaySubtract(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "subtracts";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "subtracts";
            lastPressed = "operator";
        }
    }
}
function displayAdd(){
    if(lastPressed !== "operator"){
        if(currentOperator === ""){
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "adds";
            lastPressed = "operator";
        }else{
            displayEquals()
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''));
            currentOperator = "adds";
            lastPressed = "operator";
        }
    }
}
function displayEquals(){
    if(lastPressed !== "operator"){
        if(currentOperator !== ""){
            values.push(text.textContent.replace(/[^0-9.-]/gm, ''))
            let divResult = operate(values[values.length - 2], values[values.length - 1], currentOperator);
            let keeper = divResult;
            if(divResult.toString().length > 13){
                divResult = keeper.toExponential();
                let arr = divResult.split('e')
                console.log(arr)
                arr[0] = round(arr[0])
                divResult = arr[0] + 'e' + arr[1];

            }
            text.textContent = `${divResult}`;
            currentOperator = "";
            lastPressed = "num";
        }
    }
}