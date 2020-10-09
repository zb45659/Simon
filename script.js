// let buttons = document.querySelectorAll(".buttons")
let green = document.getElementById("green")[0];
let red = document.getElementById("red")[0];
let yellow = document.getElementById("yellow")[0];
let blue = document.getElementById("blue")[0];
let startButton = document.querySelector(".start");

let sequence = [];
let userSequence = [];
let level = 0;
const buttons = [green,red,yellow,blue];
const random = buttons[Math.floor(Math.random() * buttons.length)];

function activateButton(btn) {
    // setInterval(function() {
        btn.style.backgroundColor = "white";

    }


function startGame() {
    console.log("game started");
}


function nextLevel() {
    level += 1;
}
startButton.addEventListener('click',startGame);

activateButton(random);
// console.log(green);






