// Simple Calculator for CodeAlpha Internship

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

// Button click ke liye
buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let btnText = e.target.innerHTML;
        
        if(btnText === "=") {
            try {
                let result = calculate(string);
                input.value = result;
                string = result.toString();
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(btnText === "AC") {
            string = "";
            input.value = "";
        }
        else if(btnText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if(btnText === "%") {
            string += "%";
            input.value = string;
        }
        else {
            string += btnText;
            input.value = string;
        }
    });
});

// Keyboard support (Bonus)
document.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        handleEqual();
    }
    else if(e.key === "Backspace") {
        handleDelete();
    }
    else if(e.key === "Escape") {
        handleClear();
    }
    else if("0123456789+-*/.%".includes(e.key)) {
        string += e.key;
        input.value = string;
    }
});

function handleEqual() {
    try {
        let result = calculate(string);
        input.value = result;
        string = result.toString();
    } catch {
        input.value = "Error";
        string = "";
    }
}

function handleDelete() {
    string = string.slice(0, -1);
    input.value = string;
}

function handleClear() {
    string = "";
    input.value = "";
}

// Simple calculate function
function calculate(expr) {
    // Basic percentage handling (5%4 = 0.2)
    if(expr.includes("%")) {
        expr = expr.replace(/(\d+)%(\d+)/g, function(match, a, b) {
            return (parseFloat(a) * parseFloat(b) / 100);
        });
    }
    return eval(expr);
}