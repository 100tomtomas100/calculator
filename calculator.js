let display = document.getElementById("numbers");
let input = sessionStorage.getItem("input");
let input2 = sessionStorage.getItem("input2");
let operator = sessionStorage.getItem("operator");


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


let operate = function () {
    if (operator == "+") {
    return sum(Number(input2), Number(input));
    } else if (operator == "-") {
    return subtract(Number(input2), Number(input));
    } else if (operator == "*") {
    return  multiply(Number(input2), Number(input));
    } else if (operator == "/") {
    return divide(Number(input2), Number(input));
    }
    display.innerText
}



document.getElementById("add").addEventListener("click", () => {
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









