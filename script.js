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
let inputOnScreen='0';
const screen=document.querySelector('.screen p');
screen.innerHTML=inputOnScreen;


//number and decimal inputs by clicking

const input1=document.querySelector('#one');
input1.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation=''; //unless lastOperation changes,it will continue to empty the input.   
    }
    if(operandInput.length<10) {
        operandInput.push('1');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
        
});

const input2=document.querySelector('#two');
input2.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('2');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input3=document.querySelector('#three');
input3.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('3');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input4=document.querySelector('#four');
input4.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('4');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input5=document.querySelector('#five');
input5.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('5');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input6=document.querySelector('#six');
input6.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('6');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input7=document.querySelector('#seven');
input7.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('7');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input8=document.querySelector('#eight');
input8.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('8');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input9=document.querySelector('#nine');
input9.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('9');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const input0=document.querySelector('#zero');
input0.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('0');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
});

const inputDot=document.querySelector('#deci');
inputDot.addEventListener('click',()=>{
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
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



//functions of operations.


function sumOfArray(array){
    return array[0]+array[1];
}

function diffOfArray(array){
    return array[0]-array[1];
}

function multOfArray(array){
    return array[0]*array[1];
}

function divOfArray(array){
    if(typeof(array[0]/array[1])==NaN){
        inputOnScreen='ERROR!';
        screen.innerHTML=inputOnScreen;
    }else{
    return array[0]/array[1];
    }
}

function perOfArray(array){
    return (multOfArray(array))/100;
}

function squareRootOf(num){
    return num**(1/2);
}

function minusOf(num){
    return num*(-1);
}

function factorialOf(num){
    if (num < 0) return 'ERROR!';
    else if (num === 0) return 1;
    else if (num>0 && Number.isInteger(num)){
        let x = num - 1;
        while (x > 1) {
        num *= x;
        x--;
        }
        return (num)
    }
}

let result ='';
function getResult(){
    
    if (sum.length===1) {

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        sum.push(operand);
        console.log(sum);
        operandInput.length=0;
        result=sumOfArray(sum);   
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        sum.length=0;

    }else if(diff.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        diff.push(operand);
        console.log(diff);
        operandInput.length=0;
        result=diffOfArray(diff);   
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        diff.length=0;
 
    }else if(mult.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        mult.push(operand);
        console.log(mult);
        operandInput.length=0;
        let resultRaw=multOfArray(mult);  
        result=Math.round(resultRaw*100)/100;
        if(result.toString().length<15){
            inputOnScreen=result;
            screen.innerHTML=inputOnScreen;
        }else{
            result='ERROR!TOO LONG!';
            inputOnScreen=result;
            screen.innerHTML=inputOnScreen;
        }   
        
        mult.length=0;


    }else if(div.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        div.push(operand);
        console.log(div);
        operandInput.length=0;
        let resultRaw=divOfArray(div);  
        result=Math.round(resultRaw*100)/100;
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        div.length=0;


    }else if(per.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        per.push(operand);
        console.log(per);
        operandInput.length=0;
        let resultRaw=perOfArray(per); 
        result=Math.round(resultRaw*100)/100;
        if(result.toString().length<15){
            inputOnScreen=result;
            screen.innerHTML=inputOnScreen;
        }else{
            result='ERROR!TOO LONG!';
            inputOnScreen=result;
            screen.innerHTML=inputOnScreen;
        }     
        per.length=0;

    }else{
        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        result=operand;
        operandInput.length=0;
    }
    
    return result;

}


//Executing operations

const sum=[];
const diff=[];
const mult=[];
const div=[];
const per=[];

//if user doubleclicks on same operator more than once, operands becomes zero. so to obey it last operation will be saved in case of repeating.
let lastOperation='';

const addOper=document.querySelector('#add');
addOper.addEventListener('click', ()=>{
    if (operandInput.length!==0||lastOperation!=='+'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            sum.push(operand);
            console.log(sum);
            operandInput=[];
    
        }else{
            let result=getResult();
            sum.push(result);
            console.log(sum);
    
        }
    }
    lastOperation='+';
    console.log(lastOperation);
    
});

const multOper=document.querySelector('#mult');
multOper.addEventListener('click', ()=>{
    if (operandInput.length!==0||lastOperation!=='*'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            mult.push(operand);
            console.log(mult);
            operandInput=[];

        }else{
            let result=getResult();
            mult.push(result);
            console.log(mult);
        }
    }
    lastOperation='*';
    console.log(lastOperation);

    
});

const subOper=document.querySelector('#sub');
subOper.addEventListener('click', ()=>{
    if (operandInput.length!==0||lastOperation!=='-'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            diff.push(operand);
            console.log(diff);
            operandInput=[];

        }else{
            let result=getResult();
            diff.push(result);
            console.log(diff);
        }
    }
    lastOperation='-';
    console.log(lastOperation);

    
});

const divOper=document.querySelector('#div');
divOper.addEventListener('click', ()=>{
    if (operandInput.length!==0||lastOperation!=='/'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            div.push(operand);
            console.log(div);
            operandInput=[];

        }else{
            let result=getResult();
            div.push(result);
            console.log(div);
        }
    }
    lastOperation='/';
    console.log(lastOperation);

    
});


const perOper=document.querySelector('#percentage');
perOper.addEventListener('click', ()=>{
    if (operandInput.length!==0||lastOperation!=='%'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            per.push(operand);
            console.log(per);
            operandInput=[];

        }else{
            let result=getResult();
            per.push(result);
            console.log(per);
        }
    }
    lastOperation='%';
    console.log(lastOperation);

    
});


const equalOper=document.querySelector('#equal');
equalOper.addEventListener('click', ()=>{
    getResult()
    operandInput=`${result}`.split('');
    
    console.log(result);
    lastOperation='='; //this last operation memory is to use 
    //for deleting input memory in case of an operation ended and 
    //user doesnt want to continue with the result.

});

const squareRootOper=document.querySelector('#squareroot');
squareRootOper.addEventListener('click',()=>{
    let operandRaw=operandInput.join('');
    let operand=Math.round(operandRaw*100)/100;
    let resultRaw=squareRootOf(operand);
    result=Math.round(resultRaw*100)/100;
    operandInput=result.toString().split('');
    screen.innerHTML=result;   
});


const factorialOper=document.querySelector('#factorial');
factorialOper.addEventListener('click',()=>{
    result=factorialOf(parseFloat(operandInput.join('')));
    if(result.toString().length<15){
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        operandInput=result.toString().split('');
    }else{
        result='ERROR!TOO LONG!';
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
    }  
});


const minusOper=document.querySelector('#minus');
minusOper.addEventListener('click', ()=>{
    let operand=operandInput.join('');
    result=minusOf(operand);
    inputOnScreen=result;
    screen.innerHTML=inputOnScreen;
    operandInput=result.toString().split('');
});


const clearOper=document.querySelector('#clear');
clearOper.addEventListener('click',()=>{
    operandInput=[];
    inputOnScreen='0';
    screen.innerHTML=inputOnScreen;
    lastOperation='';

});



