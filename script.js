// let buttons = document.querySelectorAll(".buttons")
// let green = document.getElementById("green")[0];
// let red = document.getElementById("red")[0];
// let yellow = document.getElementById("yellow")[0];
// let blue = document.getElementById("blue")[0];
const startButton = document.querySelector(".start");

let sequence = [];
let userSequence = [];
let level = 0;

function activateButton(color) {
    const button = document.querySelector(`[data-tile='${color}']`);
    
    button.classList.add('flash');
    
    setTimeout(() => {
        button.classList.remove('flash');
    }, 500);    
}

function playLevel(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, (index + 1) * 500);
    });
}

function randomStep() {
    const buttons = ['green','red','yellow','blue'];
    const random = buttons[Math.floor(Math.random() * buttons.length)];
    return random;
}

function nextLevel() {
    level += 1;
    //array used to store current sequence + new Sequence
    const nextSequence = [];
    nextSequence.push(randomStep());
    playLevel(nextSequence);
}
function startGame() {
    nextLevel();
}


startButton.addEventListener('click',startGame);

// activateButton(random);
// console.log(green);






