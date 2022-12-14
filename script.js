let operandInput=[];


//displaying on screen
let inputOnScreen='0';
const screen=document.querySelector('.screen p');
screen.innerHTML=inputOnScreen;


//Parsing Numbers Input Functions


function getInput1(){
    if (lastOperation==='='){   //if last operation is equal than user have two options. 
        //One to continue with result or start a new operation with a new operand. This condition to ensure that.
        operandInput.length=0;
        lastOperation=''; //unless lastOperation changes,it will continue to empty the input.   
    }
    if(operandInput.length<10) { //this is to limit the digits of operand. 
        //limit is set to 10, that is enough for a basic calculator.
        operandInput.push('1');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
        
}

function getInput2(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('2');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput3(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('3');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput4(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('4');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput5(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('5');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput6(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('6');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput7(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('7');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput8(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('8');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput9(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('9');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInput0(){
    if (lastOperation==='='){
        operandInput.length=0;
        lastOperation='';
    }
    if(operandInput.length<10) {
        operandInput.push('0');
        inputOnScreen=operandInput.join('');
        screen.innerHTML=inputOnScreen;
    }
         
}

function getInputDeci(){
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
}


//number and decimal inputs by clicking

const input1=document.querySelector('#one');
input1.addEventListener('click',getInput1);

const input2=document.querySelector('#two');
input2.addEventListener('click',getInput2);

const input3=document.querySelector('#three');
input3.addEventListener('click',getInput3);

const input4=document.querySelector('#four');
input4.addEventListener('click',getInput4);

const input5=document.querySelector('#five');
input5.addEventListener('click',getInput5);

const input6=document.querySelector('#six');
input6.addEventListener('click',getInput6);

const input7=document.querySelector('#seven');
input7.addEventListener('click',getInput7);

const input8=document.querySelector('#eight');
input8.addEventListener('click',getInput8);

const input9=document.querySelector('#nine');
input9.addEventListener('click',getInput9);

const input0=document.querySelector('#zero');
input0.addEventListener('click',getInput0);

const inputDot=document.querySelector('#deci');
inputDot.addEventListener('click',getInputDeci);



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

    if(array[1]===0){
        return 'ERROR!';

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
    }else{
        return 'ERROR!';
    }
}

let result ='';
function getResult(){
    //This function is to use to get result. 
    //Either when clicked on an operator or directly on "Equal" button.
    if (sum.length===1) {

        //This calculator works with two operands only. After defining first operand,
        //The first number will move to array of the choosen operator and wait there for second operand.
        //As soon as the second operand defined and clicked on an operation button, the result will be get.

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        sum.push(operand);
        operandInput.length=0;
        result=Math.round(sumOfArray(sum)*100)/100;   
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        sum.length=0;

    }else if(diff.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        diff.push(operand);
        operandInput.length=0;
        result=Math.round(diffOfArray(diff)*100)/100;   
        inputOnScreen=result;
        screen.innerHTML=inputOnScreen;
        diff.length=0;
 
    }else if(mult.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        mult.push(operand);
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
        operandInput.length=0;
        let resultRaw=divOfArray(div);
        if (resultRaw==='ERROR!'){
            inputOnScreen=resultRaw;
            screen.innerHTML=inputOnScreen; 
        }else{
            result=Math.round(resultRaw*100)/100;
            inputOnScreen=result;
            screen.innerHTML=inputOnScreen;            
        }
                
        div.length=0;


    }else if(per.length===1){

        let operandRaw=operandInput.join('');
        let operand=Math.round(operandRaw*100)/100;
        per.push(operand);
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

//Parsing Operations Input Functions

function getInputAdd(){
    if (operandInput.length!==0||lastOperation!=='+'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            sum.push(operand);
            operandInput=[];
    
        }else{
            let result=getResult();
            sum.push(result);
    
        }
    }
    lastOperation='+';
    
}

function getInputMult(){
    if (operandInput.length!==0||lastOperation!=='*'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            mult.push(operand);
            operandInput=[];

        }else{
            let result=getResult();
            mult.push(result);
        }
    }
    lastOperation='*';

    
}


function getInputSub(){
    if (operandInput.length!==0||lastOperation!=='-'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            diff.push(operand);
            operandInput=[];

        }else{
            let result=getResult();
            diff.push(result);
        }
    }
    lastOperation='-';

    
}

function getInputDiv(){
    if (operandInput.length!==0||lastOperation!=='/'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            div.push(operand);
            operandInput=[];

        }else{
            let result=getResult();
            div.push(result);
        }
    }
    lastOperation='/';

    
}

function getInputPer(){
    if (operandInput.length!==0||lastOperation!=='%'){
        if (sum.length===0&&diff.length===0&&mult.length===0&&div.length===0&&per.length===0){
            let operandRaw=operandInput.join('');
            let operand=Math.round(operandRaw*100)/100;
            per.push(operand);
            operandInput=[];

        }else{
            let result=getResult();
            per.push(result);
        }
    }
    lastOperation='%';

    
}

function getInputEqual(){
    getResult()
    operandInput=`${result}`.split('');
    
    lastOperation='='; //this last operation memory is to use 
    //for deleting input memory in case of an operation ended and 
    //user doesnt want to continue with the result.

}

function getInputSquareRoot(){
    let operandRaw=operandInput.join('');
    let operand=Math.round(operandRaw*100)/100;
    let resultRaw=squareRootOf(operand);
    result=Math.round(resultRaw*100)/100;
    operandInput=result.toString().split('');
    screen.innerHTML=result;   
}

function getInputFactorial(){
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
}

function getInputMinus(){
    let operand=operandInput.join('');
    result=minusOf(operand);
    inputOnScreen=result;
    screen.innerHTML=inputOnScreen;
    operandInput=result.toString().split('');
}

function getInputClear(){
    operandInput.length=0;
    inputOnScreen='0';
    screen.innerHTML=inputOnScreen;
    lastOperation='';

}

function getInputBackspace(){
    operandInput.pop();
    inputOnScreen=operandInput.join('');
    screen.innerHTML=inputOnScreen;
}








//Executing operations

const sum=[];
const diff=[];
const mult=[];
const div=[];
const per=[];

//if user doubleclicks on same operator more than once, operands becomes zero. so to obey it last operation will be saved in case of repeating.
let lastOperation='';


//Operation Buttons Click Event Listeners

const addOper=document.querySelector('#add');
addOper.addEventListener('click',getInputAdd);

const multOper=document.querySelector('#mult');
multOper.addEventListener('click',getInputMult);

const subOper=document.querySelector('#sub');
subOper.addEventListener('click',getInputSub);

const divOper=document.querySelector('#div');
divOper.addEventListener('click',getInputDiv);


const perOper=document.querySelector('#percentage');
perOper.addEventListener('click',getInputPer);


const equalOper=document.querySelector('#equal');
equalOper.addEventListener('click',getInputEqual);

const squareRootOper=document.querySelector('#squareroot');
squareRootOper.addEventListener('click',getInputSquareRoot);


const factorialOper=document.querySelector('#factorial');
factorialOper.addEventListener('click',getInputFactorial);


const minusOper=document.querySelector('#minus');
minusOper.addEventListener('click',getInputMinus);


const clearOper=document.querySelector('#clear');
clearOper.addEventListener('click',getInputClear);


const backspace=document.querySelector('#backspace');
backspace.addEventListener('click',getInputBackspace);



///Keyboard support.

const inputKey1=document.querySelector('html');
inputKey1.addEventListener('keydown', (e)=>{
    switch(e.key){
        case '1':
            getInput1();   
            break;
        case '2':
            getInput2();
            break;
        case '3':
            getInput3();
            break;
        case '4':
            getInput4();
            break;
        case '5':
            getInput5();
            break;
        case '6':
            getInput6();
            break;
        case '7':
            getInput7();
            break;
        case '8':
            getInput8();
            break;
        case '9':
            getInput9();
            break;
        case '0':
            getInput0();
            break;
        case '.':
            getInputDeci();
            break;
        case 'Escape':
            getInputClear();
            break;
        case '+':
            getInputAdd();
            break;
        case '-':
            getInputSub();
            break;
        case '*':
            getInputMult();
            break;
        case '/':
            getInputDiv();
            break;
        case '%':
            getInputPer();
            break;
        case '!':
            getInputFactorial();
            break;
        case 'm':
            getInputMinus();
            break;
        case '√':
            getInputSquareRoot();
            break;
        case 'Backspace':
            getInputBackspace();
            break;
        case 'Enter':
            getInputEqual();
            break;

    }       
});


