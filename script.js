// let green = document.getElementsByClassName("green");
// let red = document.getElementByClassName("red");
// let yellow = document.getElementByClassName("yellow");
// let blue = document.getElementByClassName("blue");
const startButton = document.querySelector(".start");

let sequence = [];
let level = 0;
let userSequence = [];
const nextSequence = [];
let buttons = document.querySelectorAll(".buttons")

function addSequence(btn) {
    userSequence.push(btn.getAttribute('data-button'));
    console.log(userSequence);


    // console.log(btn.getAttribute('data-button'));
};



function buttonClicked() {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            addSequence(this);
        }
    }
}


function activateButton(color) {
    const button = document.querySelector(`[data-button='${color}']`);
    
    button.classList.add('flash');
    
    setTimeout(() => {
        button.classList.remove('flash');
    }, 500);    
}

function playLevel(newSequence) {
    newSequence.forEach((color, index) => {
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
    nextSequence.push(randomStep());
    playLevel(nextSequence);
    console.log(nextSequence)
}
function startGame() {
    nextLevel();
}

startButton.addEventListener('click',startGame);

// activateButton(random);
// console.log(green);






