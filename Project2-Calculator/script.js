let display=document.getElementById('display');

function addDisplay(input){
    display.value=display.value+input;
}

function calculate()
{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="Invalid Input";
    }
}

function clearDisplay(){
    display.value="";
}