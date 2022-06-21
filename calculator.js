
let display = document.getElementById("numbers");
let display2 = document.getElementById("numbers2");
let display3 = document.getElementById("history");
let buttons = Array.from(document.getElementsByClassName("button"));
let displayTxt = display.innerText = "0";
let display2Txt = display2.innerText = "";
let input = "";
let input2 = "";
let operator = "";

let percentige = function (a) {
    return a / 100;
}

let sum = function (a, b) {
   return a + b;
};

let subtract = function (a, b) {
    return a - b;
};

let multiply = function (a, b) {
    return a * b;
};

let divide = function (a, b) {
    return a / b;
};

let action = function (a){
    operator = a;    
    return operator;
}
let screen = function (a) {
  input += a;  
  return input;
};

let screen2 = function(a) {
    input2 = a;    
    return input2;
}


let operate = function () {
    if (operator == "+") {
    return (Math.round(sum(Number(input2), Number(input))*1000000)) / 1000000;
    } else if (operator == "-") {
    return (Math.round(subtract(Number(input2), Number(input))*1000000))/1000000;
    } else if (operator == "x") {
    return (Math.round(multiply(Number(input2), Number(input))*1000000))/1000000;
    } else if (operator == "/" && input == "0") {
    return "DIVISION NOT POSSIBLE !!!! ㋡";
    } else if(operator == "/") {
    return (Math.round(divide(Number(input2), Number(input))*1000000))/1000000;
    } else if (operator == "%") {
    return (Math.round(percentige(Number(input))*1000000))/1000000;
    }
 }


buttons.map( button => {
    button.addEventListener("click", (e) => {

        switch(e.target.innerText) {
            case "⌦":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "AC":
                display.innerText = "0";
                display2.innerText = "";
                input = "";
                input2 = "";
                operator = "";
                display3.innerText = "";
                break;
            case "=":
                display3.innerText += display.innerText
                display2.innerText = "=" + " " + operate();
                display.innerText = "";
                break;
            case "+":
            case "-":
            case "x":
            case "/":            
                if  (input && input2) {
                    display2.innerText = "=" + " "+ operate();
                    screen2(operate());
                    display3.innerText += (display.innerText + " ");
                    display3.innerText += (e.target.innerText + " ");
                    action(e.target.innerText);
                    display.innerText = "";   
                    input = "";           
                    } else if (input) {                    
                    screen2(display.innerText); //input2
                    display3.innerText += (display.innerText + " ");
                    action(e.target.innerText); //operator
                    display3.innerText += (e.target.innerText + " ");
                    display.innerText = "";   
                    input = "";           
                    } else if (display3.innerText == e.target.innerText) {
                     display.innerText += "";
                     display3.innerText += "";
                    } else if (!input && operator == "%") {
                        display3.innerText += (display.innerText + " ")
                        action(e.target.innerText);
                        display3.innerText += (e.target.innerText + " ");
                        input = "";
                    }
                break;
            case "%":
                if (input && input2) {                     
                    input = input2 / 100 * input;                       
                    display2.innerText =  "=" + " " + operate();
                    display3.innerText += (display.innerText + " ");
                    display3.innerText += (e.target.innerText + " ");  
                    screen2(operate()); 
                    action("%")          ;        
                    display.innerText = "";   
                    input = "";           
                    } else if (input) {
                    action(e.target.innerText);
                    display2.innerText = "=" + " " + operate();
                    screen2(operate()); //input2 is the answer
                    display3.innerText += (display.innerText + " ");
                    display3.innerText += (e.target.innerText + " ");
                    display.innerText = "";   
                    input = "";
                } 
                break;
            case ".":
                if (Array.from(display.innerText).includes (".")) {
                   display.innerText += "";
                } else if (display.innerText) {
                    display.innerText += ".";
                } 
                break;
            default:
                if (display.innerText == "0" ) {
                    display.innerText = display.innerText.slice(0, -1);
                    display.innerText += e.target.innerText;
                    screen(e.target.innerText);
                } else if (display.innerText.length <= 16) {
                 display.innerText += e.target.innerText;
                screen(e.target.innerText);
                }
               
                
        }
    })
})



















