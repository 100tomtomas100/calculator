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

function operate (a, b) {
    if (a + b) {
        sum(a, b);
    } else if (a - b) {
        subtract(a, b); 
    } else if (a * b) {
        multiply(a, b);
    } else if (a / b) {
        divide(a, b);
    }
}

console.log(operate (2 + 3))