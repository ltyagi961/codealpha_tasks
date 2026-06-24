const words = ["Web Interfaces.", "Smart Calculators.", "Interactive Galleries.", "Creative Code."];
let i = 0;
let timer;

function typingEffect() {
    const typingElement = document.getElementById('typing-text');
    typingElement.innerHTML = ""; // Clear previous text
    let word = words[i].split("");
    
    let loopTyping = function() {
        if (word.length > 0) {
            typingElement.innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 1800);
            return;
        }
        timer = setTimeout(loopTyping, 80);
    };
    loopTyping();
}

function deletingEffect() {
    const typingElement = document.getElementById('typing-text');
    let word = words[i].split("");
    
    let loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            typingElement.innerHTML = word.join("");
        } else {
            i = (i + 1) % words.length;
            setTimeout(typingEffect, 400);
            return;
        }
        timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
}

document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
});