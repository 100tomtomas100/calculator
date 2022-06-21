/*
let input = sessionStorage.getItem("input");
let input2 = sessionStorage.getItem("input2");
let operator = sessionStorage.getItem("operator");
*/

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
    return sum(Number(input2), Number(input));
    } else if (operator == "-") {
    return subtract(Number(input2), Number(input));
    } else if (operator == "x") {
    return  multiply(Number(input2), Number(input));
    } else if (operator == "/") {
    return divide(Number(input2), Number(input));
    } else if (operator == "%" && input2) {
    return percentige(Number(input2));
    } else if (operator == "%" && !input2) {
    return percentige(Number(input));
    }
 }


buttons.map( button => {
    button.addEventListener("click", (e) => {

        switch(e.target.innerText) {
            case "C":
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
                display2.innerText = " " + "=" + operate();
                display.innerText = "";
                break;
            case "+":
            case "-":
            case "x":
            case "/":
            case "%":
                if  (input && input2) {
                    display2.innerText = " " + "=" + operate();
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
                    } 
                break;
            default:
                if (display.innerText == "0" ) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                display.innerText += e.target.innerText
                screen(e.target.innerText)
        }
    })
})












/*document.getElementById("add").addEventListener("click", () => {
    if (display.innerText == "+") {
    sessionStorage.setItem("operator", display.innerText += "");
    } else {
    input2 = sessionStorage.setItem("input2", display.innerText += "");
    };
    display.innerText = "";
    sessionStorage.setItem("operator", display.innerText = "+");
       
});

document.getElementById("seven").addEventListener("click", () => {
    if (display.innerText == "+" ||display.innerText == 0) {
    display.innerText = display.innerText.slice(0, -1);
    sessionStorage.setItem("input", display.innerText);
    } 
    sessionStorage.setItem("input", display.innerText += "7");

});

document.getElementById("eight").addEventListener("click", () => {
    if (display.innerText == "+") {
        display.innerText = display.innerText.slice(0, -1);
        sessionStorage.setItem("input", display.innerText);
        } 
    sessionStorage.setItem("input", display.innerText += "8");
   
})

document.getElementById("clear").addEventListener("click", () => {
   display.innerText = display.innerText.slice(0, -1);
   sessionStorage.setItem("input", display.innerText);
   
})

document.getElementById("equal").addEventListener("click", () => {
    
    console.log(input);
    console.log(input2);
    console.log(operate())
    
})


document.getElementById("allclear").addEventListener("click", () => {
    display.innerText = "0";
    sessionStorage.clear()
    
})



display.innerText = operate()
console.log(input)
console.log(operator)
console.log(input2)
console.log(operate())

*/







