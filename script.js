let operandInput=[];

function backspacing(){
    return operandInput.pop();
    console.log(operandInput);
}

const backspace=document.querySelector('#backspace');
backspace.addEventListener('click',()=>{
    operandInput.pop()
    inputOnScreen=operandInput.join('')
    screen.innerHTML=inputOnScreen;
});

//displaying on screen
let inputOnScreen='';
const screen=document.querySelector('.screen p');
screen.innerHTML=inputOnScreen;


//number and decimal inputs by clicking

const input1=document.querySelector('#one');
input1.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('1');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input2=document.querySelector('#two');
input2.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('2');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input3=document.querySelector('#three');
input3.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('3');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input4=document.querySelector('#four');
input4.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('4');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input5=document.querySelector('#five');
input5.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('5');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input6=document.querySelector('#six');
input6.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('6');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input7=document.querySelector('#seven');
input7.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('7');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input8=document.querySelector('#eight');
input8.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('8');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input9=document.querySelector('#nine');
input9.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('9');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input0=document.querySelector('#zero');
input0.addEventListener('click',()=>{
    if(operandInput.length<10) {
        operandInput.push('0');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const inputDot=document.querySelector('#deci');
inputDot.addEventListener('click',()=>{
    if(operandInput.length<10) {
        //to not allow two dots in one number
        if(operandInput.includes('.')){

        }else{
            operandInput.push('.');
        }
        
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

