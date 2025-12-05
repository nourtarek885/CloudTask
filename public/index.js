//document.getElementById("count").innerText = 5 // this would change the 0 to 5

let count = 0;
let countEl = document.getElementById("count-el");
function increment(){
    count++;
    countEl.innerText = count;
}

function reset(){
    count = 0;
    countEl.innerText = count;
}

function decrement(){
    count--;
    countEl.innerText = count;
}

let previousEl = document.getElementById("previous-el");
function save(){
    let countStr = count + " - ";
    previousEl.textContent += countStr;
    // better than innerText in so much and would lets us see spaces
    count = 0;
    countEl.textContent = count;
}

let name = "Nou";
let greeting = "Welcome Back";
let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting +" "+ name;

welcomeEl.innerText += "💋";

