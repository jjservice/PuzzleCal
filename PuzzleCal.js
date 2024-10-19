const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        const result = eval(display.value);
        display.value = result;
    }
    catch(error){
        display.value ='Error Msg';
    }
}

function clearDisplay(){
    display.value ='';
}